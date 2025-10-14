import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github_light_default';

@Component({
  selector: 'rc-json-editor',
  templateUrl: './json-editor.component.html',
  standalone: false,
})
export class JSONEditorComponent
  implements AfterViewInit, OnChanges, OnDestroy
{
  @HostBinding('class') classNames = 'col w-100p';
  private editor!: ace.Ace.Editor;

  @Input() value = '';
  jsonError = '';

  constructor(private elRef: ElementRef) {}

  getValue() {
    return this.editor.getValue();
  }

  ngAfterViewInit(): void {
    const containerElement: HTMLDivElement =
      this.elRef.nativeElement.querySelector('div#container');
    this.editor = ace.edit(containerElement, {
      useWorker: false,
      printMargin: false,
      value: this.value,
    });

    const innerTextArea = containerElement.querySelector(
      'textarea'
    ) as HTMLTextAreaElement;

    this.editor.setTheme('ace/theme/github_light_default');
    this.editor.session.setMode('ace/mode/json');
    this.editor.session.on('change', () => {
      try {
        if (this.getValue()) {
          JSON.stringify(JSON.parse(this.getValue()));
          this.jsonError = '';
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        this.jsonError = err.message;
      }

      innerTextArea.setCustomValidity(
        this.jsonError ? 'Invalid JSON: ' + this.jsonError : ''
      );
      innerTextArea.reportValidity();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value'] && this.editor && !this.editor.isFocused()) {
      const next = changes['value'].currentValue ?? '';
      if (next !== this.editor.getValue()) {
        const scrollTop = this.editor.session.getScrollTop();
        const pos = this.editor.getCursorPosition();
        this.editor.session.setValue(next);
        this.editor.session.setScrollTop(scrollTop);
        this.editor.moveCursorToPosition(pos);
      }
    }
  }

  ngOnDestroy(): void {
    this.editor.destroy();
    this.editor.container.remove();
  }
}
