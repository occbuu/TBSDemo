import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-announce-template',
    templateUrl: './announce-template.component.html',
    styleUrls: ['./announce-template.component.scss']
})
export class AnnounceTemplateComponent implements OnInit {
    public isCollapsed = true;
    constructor() {}

    ngOnInit() {}
}
