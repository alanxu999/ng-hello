import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage, LocalStorageService, SessionStorageService  } from 'ngx-webstorage';
import { JhiMainComponent } from './layouts/main/main.component';
import { NgHelloModule } from 'ng-hello-lib';

@NgModule({
    imports: [
        BrowserModule,
        NgHelloModule
        // Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent
    ],
    providers: [
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterAppModule {}
