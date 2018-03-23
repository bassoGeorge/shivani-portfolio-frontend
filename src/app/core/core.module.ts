///////////////////////////////////////////////////////////////////////////////
//                            The core app module                            //
///////////////////////////////////////////////////////////////////////////////

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { coreRoutes } from './core.routes';
import { HomePage } from './pages';
import {
    NavigationComponent
} from './components';

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
        NavigationComponent
    ],
    exports: [
        NavigationComponent
    ]
})
export class CoreModule { }
