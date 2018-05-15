import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineViewRoutingModule } from './line-view-routing.module';
import { LineViewComponent } from './line-view.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, LineViewRoutingModule, PageHeaderModule],
    declarations: [LineViewComponent]
})
export class LineViewModule {}
