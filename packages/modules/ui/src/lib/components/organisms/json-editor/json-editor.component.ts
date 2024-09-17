import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
} from '@angular/core';
import ace from 'ace-builds';

@Component({
  selector: 'rc-json-editor',
  templateUrl: './json-editor.component.html',
})
export class JSONEditorComponent implements AfterViewInit, OnDestroy {
  @HostBinding('class') classNames = 'col w-100p';

  editor!: ace.Ace.Editor;

  @Input() value = '';

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const containerElement: HTMLDivElement =
      this.elRef.nativeElement.querySelector('div#container');
    this.editor = ace.edit(containerElement, {
      useWorker: false,
      printMargin: false,
      value: this.value,
    });

    // Seems we have to import it manually in both cases...
    this.editor.setTheme('ace/theme/monokai');
    this.editor.session.setMode('ace/mode/json');
  }

  ngOnDestroy(): void {
    this.editor.destroy();
    this.editor.container.remove();
  }

  // editor.session.on('change', function (delta) {
  //   /*
  //    delta { start: number, end: number, line: array of changes, action: string }
  //   */
  //   console.log(editor.getValue());
  // });
}
