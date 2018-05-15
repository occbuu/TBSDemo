import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineNewRoutingModule } from './line-new-routing.module';
import { LineNewComponent } from './line-new.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, LineNewRoutingModule, PageHeaderModule],
    declarations: [LineNewComponent]
})
export class LineNewModule {}
