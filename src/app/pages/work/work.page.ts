import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'work-page',
    styleUrls: ['./work.page.styl', '../page.styl'],
    templateUrl: './work.page.html'
})
export class WorkPage {
    @HostBinding('class.off-white-page') offWhitePage = true;
}
