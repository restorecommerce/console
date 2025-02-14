import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';

import { JssFormComponent, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

@Component({
  selector: 'rc-account-account-information',
  templateUrl: './account-information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcAccountInformationComponent {
  @Input({ required: true })
  accountInformationFormSchema!: VCLFormFieldSchemaRoot;

  @ViewChild('personalForm')
  accountInformationForm!: JssFormComponent;
}
