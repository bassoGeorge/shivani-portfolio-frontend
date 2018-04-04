import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SafeHtml } from '@angular/platform-browser';
import 'rxjs/add/operator/switchMap';

import { ApiService } from '../../services/api.service';
import { Project } from '../../models';

@Component({
    selector: 'project-details-page',
    styleUrls: ['./project-details.page.styl', '../page.styl'],
    templateUrl: './project-details.page.html'
})
export class ProjectDetailsPage {
    @HostBinding('class.off-white-page') offWhitePage = false;

    constructor(
        private route: ActivatedRoute,
        private api: ApiService
    ){}

    details: SafeHtml;

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.api.getProjectDetails(parseInt(params.get('id'))))
            .subscribe( project => {
                this.details = project.details
            })
        ;
    }
}
