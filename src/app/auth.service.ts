import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UtilService } from 'src/app/services/util/util.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private logoutUrl = 'https://testar.auth.us-east-1.amazoncognito.com/logout?response_type=token&client_id=7amh5jk3tmdqjju7q5fvmq09ar&redirect_uri=http://localhost:4200/login';

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient,
    private router: Router, private utilService: UtilService) { }
  

    /**
     * Checks whether user is authenticate
     */
  public isAuthenticated(): boolean {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken == null) {
      return false;
    }
    // Check whether the token is expired and return true or false
    return accessToken && !this.jwtHelper.isTokenExpired(accessToken);
  }

  public handleAuthentication(): void {
    const accessToken = this.getParameterByName('access_token');
    const idToken = this.getParameterByName('id_token');

    if (accessToken && idToken) {
      window.location.hash = '';
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('id_token', idToken);
      this.router.navigate(['/customers']);
    }
  }

  public login(accessToken: string, idToken: string) {
  }

  public logout() {
    console.log('Logout the user ');
    // remove user from local storage to log user out
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    return this.http.get(this.logoutUrl, httpOptions);
      // .pipe(
      //   tap(data => this.utilService.log('Loged out user successfully')),
      //   catchError(this.utilService.handleError('logout'))
      // );
  }

  public getParameterByName(name: string): string {
    const match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }


}
