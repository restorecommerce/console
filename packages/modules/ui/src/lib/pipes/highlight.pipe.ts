import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, args: string): string {
    if (!args) {
      return value;
    }
    const regex = new RegExp(args, 'gi');
    return value.replace(
      regex,
      (match) => `<span class="highlight">${match}</span>`
    );
  }
}
