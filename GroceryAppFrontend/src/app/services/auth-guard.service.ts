import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/users.model';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  //Register and Login API Calls
  constructor(private http: HttpClient) { }

  register(data: User): Observable<any> {
    return this.http.post<any>("http://localhost:60901/api/User/register", data);
  }

  login(data: any): Observable<any> {


    return this.http.post<any>("http://localhost:60901/api/User/login", { Email: data.Email, Password: data.Password });
  }


  checkToken(): boolean {
    if (localStorage.getItem('token'))
      return true;
    else
      return false;

  }



  logout() {

    localStorage.clear();

  }
}
