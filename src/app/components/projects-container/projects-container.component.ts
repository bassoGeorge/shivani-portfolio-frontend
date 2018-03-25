import { Component, HostBinding } from '@angular/core';
import { ApiService } from '../../services/api.service';

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

    constructor(
        private api: ApiService
    ){
        api.projectTypes.subscribe(ptypes => {
            this.projectTypes = ptypes;
            this.switchToProjectsPage(ptypes[0]);
        });
    }

    switchToProjectsPage(ptype: ProjectType) {
        this.currentProjectType = ptype;
        // TODO: Fetch the projects from api and set to variable
    }
}
