import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class ApiService {
    baseUrl = 'http://localhost:3000/api'
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    constructor(private http: HttpClient) { }

    //donors api
    addDonor(data: any): Observable<any> {
        const url = `${this.baseUrl}/addDonor`;
        return this.http.post(url, data)
            .pipe(
                catchError(this.errorMgmt)
            )
    }
    getDonors(): Observable<any> {
        const url = `${this.baseUrl}/getDonors`;
        return this.http.get(url, { headers: this.headers })
            .pipe(catchError(this.errorMgmt));
    }

    deleteDonor(id: number): Observable<any> {
        const url = `${this.baseUrl}/deleteDonor/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .pipe(
                catchError(this.errorMgmt)
            )
    }

    //patients api
    addPatient(data: any): Observable<any> {
        const url = `${this.baseUrl}/addPatient`;
        return this.http.post(url, data).pipe(
            catchError(this.errorMgmt)
        )
    }
    getPatients(): Observable<any> {
        const url = `${this.baseUrl}/getPatients`;
        return this.http.get(url, { headers: this.headers })
            .pipe( 
                catchError(this.errorMgmt)
            )
    }
    deletePatient(id: number): Observable<any> {
        const url = `${this.baseUrl}/deletePatient/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .pipe( 
                catchError(this.errorMgmt)
            )
    }

    
    // Error handling
    errorMgmt(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
        } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(() => {
        return errorMessage;
        });
    }
}