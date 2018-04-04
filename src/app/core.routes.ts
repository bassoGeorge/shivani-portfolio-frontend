import { Routes } from '@angular/router';

import { HomePage, AboutPage, WorkPage, ProjectDetailsPage } from './pages';

export const coreRoutes: Routes = [
    { path: 'home', component: HomePage },
    { path: 'about', component: AboutPage },
    { path: 'work', component: WorkPage },
    { path: 'work/:id', component: ProjectDetailsPage },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: '' }
    // { path: 'about-me', component: AboutMePage },
];
