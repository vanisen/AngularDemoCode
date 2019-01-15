import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostBooking } from '../models/postBooking.model';
import { IProperty } from '../models/propertyData.model';


@Injectable()

// For RxJS >6.0.0
export class PropertyService {

    constructor(private _http: HttpClient,
                private __http: Http) {
                }


    getProperty(): Observable<IProperty[]> {
        return this._http.get<IProperty[]>('/api/getAllProperty');
    }


    postBooking(bookData: PostBooking): Observable<any> {
        const body = JSON.stringify(bookData);
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        return this.__http.post('/api/addData', body, options);

    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText || 'Server error');
      }
}


