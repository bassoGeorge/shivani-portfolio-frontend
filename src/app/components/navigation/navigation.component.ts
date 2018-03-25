///////////////////////////////////////////////////////////////////////////////
//          The main navigation component at the bottom of the page          //
///////////////////////////////////////////////////////////////////////////////
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface NavInfo {             // 
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
