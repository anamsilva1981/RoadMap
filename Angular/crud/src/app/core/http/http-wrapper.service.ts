import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})

export class HttpWrapperService {
    constructor( private http: HttpClient){}

    post<T>(url: string, body: T): Observable<T>{
        return this.http.post<T>(url, body)
    }
}