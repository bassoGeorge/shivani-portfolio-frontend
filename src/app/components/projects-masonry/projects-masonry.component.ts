import { Component, Input, ElementRef } from '@angular/core';
import { Project } from '../../models';

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

    masonryOptions = {
        percentPosition: true,
    }

    @Input() projects: Project[]

    constructor(
        private elem: ElementRef
    ) {}

}
