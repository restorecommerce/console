import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import ace from 'ace-builds';

@Component({
  selector: 'rc-json-editor',
  templateUrl: './json-editor.component.html',
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }

      #container {
        width: 100%;
        min-height: 3em;
      }
    `,
  ],
})
export class JSONEditorComponent implements AfterViewInit, OnDestroy {
  editor!: ace.Ace.Editor;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const containerElement: HTMLDivElement =
      this.elRef.nativeElement.querySelector('div#container');
    this.editor = ace.edit(containerElement, {
      useWorker: false,
      value: '{ "name": "bello", "age": 30 }',
    });

    this.editor.setTheme('ace/theme/monokai');
    this.editor.session.setMode('ace/mode/javascript');
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
