import { Component, Input, OnChanges } from '@angular/core';

import {
  VCLFormControlGroupModule,
  VCLInputModule,
  VCLSelectComponent,
  VCLSelectListComponent,
  VCLSelectListItemComponent,
  VCLButtonComponent,
  VCLBadgeComponent,
} from '@vcl/ng-vcl';

import { InvoiceDocumentVM, InvoiceSectionVM } from '../../../models';

@Component({
  selector: 'app-invoice-sections-tab',
  templateUrl: './invoice-sections-tab.component.html',
  imports: [
    VCLSelectComponent,
    VCLInputModule,
    VCLFormControlGroupModule,
    VCLSelectListComponent,
    VCLSelectListItemComponent,
    VCLButtonComponent,
    VCLBadgeComponent,
  ],
})
export class InvoiceSectionTabComponent implements OnChanges {
  @Input() sections: InvoiceSectionVM[] = [];
  @Input() documents: InvoiceDocumentVM[] = [];

  selectedSectionId?: string;
  selectedSection?: InvoiceSectionVM;

  ngOnChanges(): void {
    if (this.sections?.length) {
      this.selectSection(this.sections[0].id);
    }
  }

  selectSection(sectionId: string) {
    this.selectedSectionId = sectionId;
    this.selectedSection = this.sections.find((p) => p.id === sectionId);
  }
}
