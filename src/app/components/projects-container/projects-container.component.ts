import { Component, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { ApiService } from '../../services/api.service';
import { Project } from '../../models';

interface ProjectType {
    id: number,
    name: string
}

@Component({
    selector: 'projects-container',
    styleUrls: ['./projects-container.component.styl'],
    templateUrl: './projects-container.component.html'
})
export class ProjectsContainerComponent {

    projectTypes: ProjectType[];
    currentProjectType: ProjectType = null;
    currentProjects: Project[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private api: ApiService
    ){
        let pageName = this.route.queryParamMap
            .map((params: ParamMap) => params.get('page'))
        ;

        Observable.zip(pageName, api.projectTypes)
            .subscribe(data => {
                var ptypes = data[1];

                this.projectTypes = ptypes;

                var pageName = data[0];
                var page = pageName ? (ptypes.find(ptype => this.pageNameSlug(ptype.name) == this.pageNameSlug(pageName)) || ptypes[0]): ptypes[0];

                this.switchToProjectsPage(page);
            })
    }

    switchToProjectsPage(ptype: ProjectType) {
        this.currentProjectType = ptype;
        // TODO: Fetch the projects from api and set to variable
        this.api.getProjects(ptype.id).subscribe(projects => {
            this.currentProjects = projects;
        });
        this.updateUrlToReflectProjectType(ptype);
    }

    private pageNameSlug(name: string) {
        return name.toLocaleLowerCase().replace(/\s/g, '-');
    }

    private updateUrlToReflectProjectType(ptype: ProjectType) {
        let newRoute = this.router
            .createUrlTree([], {
                queryParams: {
                    page: this.pageNameSlug(ptype.name)
                },
                queryParamsHandling: "merge",
                relativeTo: this.route
            })
            .toString();
        this.location.go(newRoute);
    }
}
