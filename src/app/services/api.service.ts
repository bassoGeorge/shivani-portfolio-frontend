import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { API_URL } from '../build-config';

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

    // Given a relativePath, completes the URL with API base
    completeDataUrl = (relativePath: string) => API_URL + relativePath
}
