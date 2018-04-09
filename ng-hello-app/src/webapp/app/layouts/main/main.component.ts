import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';

import { Title } from '@angular/platform-browser';

@Component({
    selector: 'jhi-main',
    templateUrl: 'main.component.html'
})
export class JhiMainComponent implements OnInit {
    constructor(
        private titleService: Title,
    ) {}

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        return 'title';
    }

    ngOnInit(): void { }
}
