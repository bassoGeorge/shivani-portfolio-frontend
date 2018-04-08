import { Injectable, SecurityContext } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';

import { API_URL } from '../build-config';
import { Project, ProjectDetails } from '../models';

@Injectable()
export class ApiService {
    constructor(
        private http: HttpClient,
        private ds: DomSanitizer
    ){}

    test: Observable<any> = this.http.get("/api/tables/test_projects/rows")
        .map(json => json['data'])
        .mergeMap(items => Observable.from(items))
        .map(( item:any ) => ({...item, thumbnail: this.completeDataUrl(item.thumbnail) }))
    ;

    projectTypes: Observable<{id: number, name: string}[]> =
        this.http.get("/api/tables/project_types/rows", {
            params: new HttpParams()
                .set('depth', '0')
                .set('active', '1')
                .set('columns', 'id,name')
        })
        .map(json => json['data'])
    ;

    getProjects(pType: number): Observable<Project[]> {
        return this.http
            .get("/api/tables/projects/rows", {
                params: new HttpParams()
                    .set('depth', '0')
                    .set('active', '1')
                    .set('columns', 'id,title,subtitle,thumbnail')
                    .set('filters[project_type_id][eq]', '' + pType)
            })
            .map(json => json['data'])
            // .mergeMap(items => Observable.from(items))
            .map((items: any[]) => {
                return items.map( item => ({
                    id: parseInt(item['id']),
                    title: item['title'],
                    subtitle: item['subtitle'],
                    thumbnail: this.completeDataUrl(item['thumbnail'])
                }));
            });
    }

    getProjectDetails(id: number): Observable<ProjectDetails> {
        return this.http
            .get(`/api/tables/projects/rows/${id}`, {
                params: new HttpParams()
                    .set('depth', '0')
            })
            .map(json => json['data'])
            .map((item: any) => {
                return {
                    id: parseInt(item['id']),
                    title: item['title'],
                    subtitle: item['subtitle'],
                    description: this.convertDetailsToHtml(item['details']),
                    bannerImage: null
                };
            });
        ;
    }

    // Given a relativePath, completes the URL with API base
    // completeDataUrl = (relativePath: string) => API_URL + relativePath
    private completeDataUrl(relativePath: string) {
        if (relativePath.indexOf('/') === 0) {
            return API_URL + relativePath;
        }
        return relativePath;
    }

    private convertDetailsToHtml(data: string) {
        let text = (data || '<div></div>').replace(/src=('|")(\/.*?)('|")/g, 'src=$1'+ API_URL + '$2$3')
        return this.ds.sanitize(SecurityContext.HTML, text);
    }
}
