import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { API_URL } from '../build-config';
import { Project } from '../models';

@Injectable()
export class ApiService {
    constructor(
        private http: HttpClient
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
                    title: item['title'],
                    subtitle: item['subtitle'],
                    thumbnail: this.completeDataUrl(item['thumbnail'])
                }));
            });
    }

    // Given a relativePath, completes the URL with API base
    // completeDataUrl = (relativePath: string) => API_URL + relativePath
    private completeDataUrl(relativePath: string) {
        if (relativePath.indexOf('/') === 0) {
            return API_URL + relativePath;
        }
        return relativePath;
    }
}
