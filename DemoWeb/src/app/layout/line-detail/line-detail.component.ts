import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-line-detail',
    templateUrl: './line-detail.component.html',
    styleUrls: ['./line-detail.component.scss'],
    animations: [routerTransition()]
})
export class LineDetailComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
