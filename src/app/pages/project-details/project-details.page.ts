import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ApiService } from '../../services/api.service';
import { ProjectDetails } from '../../models';

@Component({
    selector: 'project-details-page',
    styleUrls: ['../page.styl', './project-details.page.styl'],
    templateUrl: './project-details.page.html',
})
export class ProjectDetailsPage {
    @HostBinding('class.off-white-page') offWhitePage = false;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
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

    backToWork() {
        this.location.back();
    }
}
