import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'projects-masonry',
    styleUrls: ['./projects-masonry.component.styl'],
    templateUrl: './projects-masonry.component.html'
})
export class ProjectsMasonryComponent {
    testProjects = [{
        size: 0
    },{
        size: 1
    },{
        size: 0
    },{
        size: 0
    },{
        size: 2
    },{
        size: 2
    },{
        size: 0
    },{
        size: 1
    },{
        size: 1
    },{
        size: 0
    },{
        size: 0
    },{
        size: 2
    }];

    constructor(
        private elem: ElementRef
    ) {}
}
