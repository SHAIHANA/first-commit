import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userModel } from '../../userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 baseUrl="http://localhost:3000"

  constructor(private http:HttpClient) { }
  //add cheyikan
  addUserAPI(user:userModel){
    return this.http.post(`${this.baseUrl}/users`,user)
  }

//add cheythathine -->get cheyikan
  getUserAPI(){
    return this.http.get(`${this.baseUrl}/users`)
  }

//delete cheyan
  deleteUserAPI(id:any){
return this.http.delete(`${this.baseUrl}/users/${id}`)
  }

//edit cheyan
  getAUserAPI(id:any){
return this.http.get(`${this.baseUrl}/users/${id}`)
  }

  //editAPI
  editUserAPI(id:any,user:userModel){
return this.http.put(`${this.baseUrl}/users/${id}`,user)

  }
}
