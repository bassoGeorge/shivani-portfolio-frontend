import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ApiService } from '../../services/api.service';
import { ProjectDetails } from '../../models';

@Component({
    selector: 'project-details-page',
    styleUrls: ['./project-details.page.styl', '../page.styl'],
    templateUrl: './project-details.page.html',
    encapsulation: ViewEncapsulation.None
})
export class ProjectDetailsPage {
    @HostBinding('class.off-white-page') offWhitePage = false;

    constructor(
        private route: ActivatedRoute,
        private api: ApiService
    ){}

    projectDetails: ProjectDetails;

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.api.getProjectDetails(parseInt(params.get('id'))))
            .subscribe( project => {
                this.projectDetails = project;
            })
        ;
    }
}
