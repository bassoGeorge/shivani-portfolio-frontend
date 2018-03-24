import { Routes } from '@angular/router';

import { HomePage, AboutPage, WorkPage } from './pages';

export const coreRoutes: Routes = [
    { path: 'home', component: HomePage },
    { path: 'about', component: AboutPage },
    { path: 'work', component: WorkPage },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: '' }
    // { path: 'about-me', component: AboutMePage },
];
