import {Component, HostBinding, OnDestroy, Renderer2} from '@angular/core';

@Component({
    selector: 'work-page',
    styleUrls: ['./work.page.styl', '../page.styl'],
    templateUrl: './work.page.html'
})
export class WorkPage implements OnDestroy {
    @HostBinding('class.off-white-page') offWhitePage = true;


    constructor(
        private renderer: Renderer2
    ) {
        this.renderer.addClass(document.body, 'off-white-page');
        this.renderer.addClass(document.body, 'padded-page');
    }

    ngOnDestroy() {
        this.renderer.removeClass(document.body, 'off-white-pagee');
        this.renderer.removeClass(document.body, 'padded-page');
    }
}
