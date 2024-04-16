import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'rc-scrollable-container',
  templateUrl: './scrollable-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcScrollableContainerComponent {
  @Input({ required: true }) height = '100%';

  constructor(private readonly sanitizer: DomSanitizer) {}

  get safeHeight(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(
      `calc(100vh - ${this.height})`
    );
  }
}
