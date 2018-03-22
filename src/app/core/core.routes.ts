import { Routes } from '@angular/router';

import { HomePage } from './pages';

export const coreRoutes: Routes = [
    { path: 'home', component: HomePage },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    // { path: 'about-me', component: AboutMePage },
];
