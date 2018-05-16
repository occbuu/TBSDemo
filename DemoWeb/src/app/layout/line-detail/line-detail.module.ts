import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineDetailRoutingModule } from './line-detail-routing.module';
import { LineDetailComponent } from './line-detail.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, LineDetailRoutingModule, PageHeaderModule],
    declarations: [LineDetailComponent]
})
export class LineDetailModule {}
