import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuleRoutingModule } from './rule-routing.module';
import { RuleComponent } from './rule.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, RuleRoutingModule, PageHeaderModule],
    declarations: [RuleComponent]
})
export class RuleModule {}
