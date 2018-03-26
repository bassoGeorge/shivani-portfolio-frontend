import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MasonryModule } from 'angular2-masonry';

import { coreRoutes } from './core.routes';

import { CacheService, ApiService } from './services';
import { HomePage, AboutPage, WorkPage } from './pages';
import {
    NavigationComponent,
    AppComponent,
    ResumeButtonComponent,
    MyInfoCardComponent,
    ProjectsContainerComponent,
    ProjectsMasonryComponent
} from './components';
import { CoreHttpInterceptors } from './interceptors';

// Style imports
import 'styles/normalize.css';
import 'styles/site';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            coreRoutes,
            { enableTracing: false } // only for debugging purposes
        ),
        HttpClientModule,
        CommonModule,
        MasonryModule
    ],
    declarations: [
        AppComponent,
        HomePage,
        WorkPage,
        AboutPage,
        ResumeButtonComponent,
        MyInfoCardComponent,
        ProjectsContainerComponent,
        ProjectsMasonryComponent,
        NavigationComponent
    ],
    providers: [
        CacheService,
        ApiService,
        ...CoreHttpInterceptors
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

