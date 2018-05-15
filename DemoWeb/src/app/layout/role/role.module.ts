import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, RoleRoutingModule, PageHeaderModule],
    declarations: [RoleComponent]
})
export class RoleModule {}
