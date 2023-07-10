import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Counter } from "../../../shared/models/Counter";


@Injectable({
    providedIn: "root",
})
export class MidjourneydigitalService {
    readonly urlBackEnd: string = environment.URL_BACK_END + "/counter";

    constructor(private http: HttpClient) {}

    // GET
    getCounter(): Observable<Counter> {
        return this.http
            .get<Counter>(`${this.urlBackEnd}`)
            .pipe(catchError(this.handleError));
    }

    // POST
    // createData(data: any) {
    //     return this.http
    //         .post(http://example.com/api/data, data)
    //         .pipe(catchError(this.handleError));
    // }

    // PUT
    updateData(id: string, data: Counter): Observable<Counter> {
        return this.http
            .put<Counter>(`${this.urlBackEnd}/${id}/increment`, data)
            .pipe(catchError(this.handleError));
    }

    // DELETE
    deleteData(id: number) {
        return this.http
            .delete(`http://example.com/api/data/${id}`)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = "Unknown error!";
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(() => new Error('test'));
    }
}