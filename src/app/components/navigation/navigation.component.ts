///////////////////////////////////////////////////////////////////////////////
//          The main navigation component at the bottom of the page          //
///////////////////////////////////////////////////////////////////////////////
import { Component, HostBinding } from '@angular/core';
import { Router, ResolveEnd } from '@angular/router';

interface NavInfo {
    id: string;
    name: string;
    target: string;
}

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.styl']
})
export class NavigationComponent {
    @HostBinding('class.navigation-theme--light') lightNav = false;

    constructor(
        private router: Router,
    ) {
        // Set data: { navTheme: 'light' } in the route to make this navigation
        // take the light theme
        router.events
            .filter(event => event instanceof ResolveEnd)
            .subscribe(( event: ResolveEnd ) => {
                this.lightNav = event.state.root.firstChild.data.navTheme == 'light';
            });
    }
    // TODO: add hostbinding or inverse class for different colors on home

    pages: NavInfo[] = [
        this.buildNav("Work", "/work"),
        this.buildNav("About", "/about"),
    ]

    buildNav(name: string, target: string): NavInfo {
        return {
            id: name.toLowerCase().replace(' ', '-'),
            name: name,
            target: target
        }
    }
}
