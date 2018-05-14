import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrortypeRoutingModule } from './errortype-routing.module';
import { ErrortypeComponent } from './errortype.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';
import { CollapseModule, TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    imports: [
        CommonModule, 
        ErrortypeRoutingModule, 
        PageHeaderModule,
        ModalModule.forRoot(),        
    ],
    declarations: [ErrortypeComponent]
})
export class ErrortypeModule {}
