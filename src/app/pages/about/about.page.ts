import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'about-page',
    templateUrl: './about.page.html',
    styleUrls: ['../page.styl']
})
export class AboutPage {

    aboutMe: SafeHtml

    constructor(
        private api: ApiService
    ){
        this.api.aboutMe.subscribe( aboutMe => this.aboutMe = aboutMe);
    }
}
