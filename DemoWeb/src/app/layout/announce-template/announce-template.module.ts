import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnounceTemplateRoutingModule } from './announce-template-routing.module';
import { AnnounceTemplateComponent } from './announce-template.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, AnnounceTemplateRoutingModule, PageHeaderModule],
    declarations: [AnnounceTemplateComponent]
})
export class AnnounceTemplateModule {}
