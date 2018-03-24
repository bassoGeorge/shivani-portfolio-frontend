///////////////////////////////////////////////////////////////////////////////
//                            The core app module                            //
///////////////////////////////////////////////////////////////////////////////

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { coreRoutes } from './core.routes';
import { CacheService, ApiService } from './services';
import { HomePage, AboutPage, WorkPage } from './pages';
import {
    NavigationComponent
} from './components';
import { CoreHttpInterceptors } from './interceptors';

// Some auxilary style imports
import 'styles/normalize.css';
import 'styles/site.styl';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(coreRoutes)
    ],
    declarations: [
        HomePage,
        WorkPage,
        AboutPage,
        NavigationComponent
    ],
    providers: [
        CacheService,
        ApiService,
        ...CoreHttpInterceptors
    ],
    exports: [
        NavigationComponent
    ]
})
export class CoreModule { }
