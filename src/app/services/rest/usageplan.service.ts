import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UsagePlan } from '../models/usageplan';
import { UtilService } from '../util/util.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UsageplanService {

  private usageplansUrl = 'http://localhost:8080/usageplans';  // URL to web api

  constructor( private http: HttpClient,
    private utilService: UtilService) { }

  getUsagePlans(): Observable<UsagePlan[]> {
    this.utilService.log('Getting Usage Plans');
    return this.http.get<UsagePlan[]>(this.usageplansUrl).pipe(
      tap(heroes => this.utilService.log('fetched usageplans')),
        catchError(this.utilService.handleError('getUsageplans', []))
      );
  }


  addUsagePlan(usagePlan: UsagePlan): Observable<any> {
    return this.http.post<string>(this.usageplansUrl, usagePlan, httpOptions).pipe(
      tap(data => this.utilService.log('Added usage plan "' + name + '"successfully')),
      catchError(this.utilService.handleError('addCustomer'))
    );
  }


}
