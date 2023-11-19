import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public http : HttpClient) { }


  login(): Observable<any> {
    
    return this.http.get("http://localhost:8080/client/");
  }
}
  
