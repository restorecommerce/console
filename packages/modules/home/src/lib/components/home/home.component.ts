import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-home-index',
  styles: [
    `
      .example-viewport {
        height: calc(100vh - 250px);
        width: 500px;
        border: 1px solid black;

        font-size: 0.7rem;
      }

      .example-item-detail {
        height: 18px;
      }

      .example-alternate {
        background: rgba(127, 127, 127, 0.3);
      }
    `,
  ],
  template: `
    <div>
      <h2>Home content</h2>

      <cdk-virtual-scroll-viewport
        [itemSize]="18 * 7"
        class="example-viewport"
      >
        <div
          *cdkVirtualFor="
            let item of items;
            let index = index;
            let count = count;
            let first = first;
            let last = last;
            let even = even;
            let odd = odd
          "
          [class.example-alternate]="odd"
        >
          <div class="example-item-detail">
            <p>Item: {{ item }}</p>
          </div>
          <div class="example-item-detail">
            <p>Index: {{ index }}</p>
          </div>
          <div class="example-item-detail">
            <p>Count: {{ count }}</p>
          </div>
          <div class="example-item-detail">
            First: {{ first ? 'Yes' : 'No' }}
          </div>
          <div class="example-item-detail">Last: {{ last ? 'Yes' : 'No' }}</div>
          <div class="example-item-detail">Even: {{ even ? 'Yes' : 'No' }}</div>
          <div class="example-item-detail">Odd: {{ odd ? 'Yes' : 'No' }}</div>
        </div>
      </cdk-virtual-scroll-viewport>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
}
