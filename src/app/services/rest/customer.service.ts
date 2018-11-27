import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Customer} from '../models/customer';
import { UtilService } from '../util/util.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customersUrl = 'http://localhost:8080/customers';

  constructor( private http: HttpClient, private utilService: UtilService) { }

/**
 * Gets list of customers.
 */
  getCustomers (): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl)
      .pipe(
        tap(customers => this.utilService.log('fetched customers')),
        catchError(this.utilService.handleError('getCustomers', []))
      );
  }

  /**
   * Adds new customer
   * @param customer - new customer to be added
   */
  addCustomer(customer: Customer): Observable<any> {
    return this.http.post<string>(this.customersUrl, customer, httpOptions).pipe(
      tap(data => this.utilService.log('Added customer "' + name + '"successfully')),
      catchError(this.utilService.handleError('addCustomer'))
    );
  }

  updateCustomer(customer: Customer): Observable<any> {
    console.log('Updating customer ' + customer.name);
    return this.http.put<string>(this.customersUrl, customer, httpOptions).pipe(
      tap(data => this.utilService.log('Updaged customer "' + name + '"successfully')),
      catchError(this.utilService.handleError('updateCustomer'))
    );
  }

  deleteCustomer(id: string): Observable<any> {
    console.log('Deleting customer ' + id);
    return this.http.delete(this.customersUrl + '/' + id, httpOptions).pipe(
      tap(data => this.utilService.log('Deleted customer "' + name + '"successfully')),
      catchError(this.utilService.handleError('deleteCustomer'))
    );
  }

}
