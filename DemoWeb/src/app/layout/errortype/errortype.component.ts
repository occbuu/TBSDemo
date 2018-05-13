import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ModalDirective, TooltipModule } from 'ngx-bootstrap';

@Component({
    selector: 'app-errortype',
    templateUrl: './errortype.component.html',
    styleUrls: ['./errortype.component.scss'],
    animations: [routerTransition()]
})
export class ErrortypeComponent implements OnInit {
    constructor() {}
    @ViewChild('popMsg') public popMsg: ModalDirective;

    ngOnInit() {}
}
