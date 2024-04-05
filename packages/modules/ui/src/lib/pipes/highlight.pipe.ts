import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, args: string): SafeHtml {
    if (!args) {
      return value;
    }
    const regex = new RegExp(args, 'gi');
    const highlighted = value.replace(
      regex,
      (match) => `<span class="highlight">${match}</span>`
    );
    return this.sanitizer.bypassSecurityTrustHtml(highlighted);
  }
}
