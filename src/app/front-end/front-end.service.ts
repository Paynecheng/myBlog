import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { host } from '../common';
import { Observable } from 'rxjs';

@Injectable()

export class FrontEndService {

    constructor (
        private http: HttpClient
    ) {}

    private getCategoryUrl = `${host}frontEnd/category`;
    private getArticleUrl = `${host}frontEnd/article`;
    private getListUrl = `${host}list/`;
    private detailArticle = `${host}detail/article`;

    getCategory(): Observable<any> {
      return this.http.get(this.getCategoryUrl);
    }

    getArticle(): Observable<any> {
      return this.http.get(this.getArticleUrl);
    }

    getList(id: string): Observable<any> {
        return this.http.get(this.getListUrl + id);
    }

    getDetailArticle(): Observable<any> {
        return this.http.get(this.detailArticle);
    }
}

