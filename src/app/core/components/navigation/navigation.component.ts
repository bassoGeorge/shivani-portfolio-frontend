///////////////////////////////////////////////////////////////////////////////
//          The main navigation component at the bottom of the page          //
///////////////////////////////////////////////////////////////////////////////
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    constructor(
        private router: Router,
    ) {}

    pages: NavInfo[] = [
        this.buildNav("Home", "/home"),
        this.buildNav("My Work", "/my-work"),
        this.buildNav("Contact Me", "/contact-me"),
    ]

    buildNav(name: string, target: string): NavInfo {
        return {
            id: name.toLowerCase().replace(' ', '-'),
            name: name,
            target: target
        }
    }
}
