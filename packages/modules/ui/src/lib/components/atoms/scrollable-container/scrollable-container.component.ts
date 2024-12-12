import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'rc-scrollable-container',
  templateUrl: './scrollable-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcScrollableContainerComponent {
  @Input({ required: true }) height = '100%';

  get safeHeight(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(
      `calc(100vh - ${this.height})`
    );
  }

  constructor(private readonly sanitizer: DomSanitizer) {}
}
