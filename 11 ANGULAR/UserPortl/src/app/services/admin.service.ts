import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

baseUrl="http://localhost:3000"
  constructor(private http:HttpClient) { }

  authentication(){
    return this.http.get(`${this.baseUrl}/users/1`)//usersil  data varunnath 
  }
}
