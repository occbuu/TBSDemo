import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-line-new',
    templateUrl: './line-new.component.html',
    styleUrls: ['./line-new.component.scss'],
    animations: [routerTransition()]
})
export class LineNewComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
