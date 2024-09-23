import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
} from '@angular/core';
import ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github_light_default';

@Component({
  selector: 'rc-json-editor',
  templateUrl: './json-editor.component.html',
})
export class JSONEditorComponent implements AfterViewInit, OnDestroy {
  @HostBinding('class') classNames = 'col w-100p';

  private editor!: ace.Ace.Editor;

  @Input() value = '';

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

    this.editor.setTheme('ace/theme/github_light_default');
    this.editor.session.setMode('ace/mode/json');
  }

  ngOnDestroy(): void {
    this.editor.destroy();
    this.editor.container.remove();
  }
}
