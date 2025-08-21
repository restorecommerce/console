import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'rc-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcCardComponent {
  @Input()
  title = '';
}
