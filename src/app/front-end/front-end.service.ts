import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { host } from '../common';
import { Observable } from 'rxjs';

@Injectable()

export class FrontEndService {
    private getCategoryUrl: string = `${host}frontEnd/category`;

    constructor (
        private http: HttpClient
    ) {}

    getCategory(): Observable<any> {
        return this.http.get(this.getCategoryUrl);
    }
}

