import { Component } from '@angular/core';
import { ApiService } from '../../services';

@Component({
    selector: 'home-page',
    templateUrl: './home.page.html',
    styleUrls: ['../page.styl', './home.page.styl']
})
export class HomePage {
    title = "Home Page";
    constructor(
        private api: ApiService
    ){
        // api.test.subscribe(console.log);
    }
}
