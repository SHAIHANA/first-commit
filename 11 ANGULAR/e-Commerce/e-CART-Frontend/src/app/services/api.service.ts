import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // viewProducAPI(id: any) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000'

  //FRONT END-SHOW AVAN

  //get all products details from DB
  getAllproductsAPI() {
    return this.http.get(`${this.baseUrl}/allproducts`)
  }

  //view particular product through id
  viewProductAPI(id: any) {
    return this.http.get(`${this.baseUrl}/view/${id}`)
  }

  //register
  registerAPI(body: any) {
    return this.http.post(`${this.baseUrl}/register`, body)
  }

  //5 //baki  munbatthe logon.ts il 
  //Login   
  loginAPI(body: any) {
    return this.http.post(`${this.baseUrl}/login`, body)
  }


  //appendToken last koduthath an wishlist nte tymil(login ayal mathram add avan wishlistil)
  appendToken() {
    const token = sessionStorage.getItem("token")
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.append("Authorization", `Bearer ${token}`)
    }
    return { headers }
  }




                 /////WISHLIST/////

                
  //Add-wishlist
  addTowishlistAPI(body: any) {
    return this.http.post(`${this.baseUrl}/wishlist`, body, this.appendToken())

  }
  //Get wishlist
  getwishlistAPI() {
    return this.http.get(`${this.baseUrl}/wishlist`, this.appendToken())

  }
  //delete wishlist

  deletewishlistAPI(id: any) {
    return this.http.delete(`${this.baseUrl}/wishlist/${id}`, this.appendToken())

  }



                       //////CART/////

  //Add-cart
  addToCartAPI(body: any) {
    return this.http.post(`${this.baseUrl}/cart`, body, this.appendToken())
  }
  //get-cart
  getCartAPI() {
    return this.http.get(`${this.baseUrl}/cart`, this.appendToken())
  }

  //delete-cart
  deleteCartAPI(id: any) {
    return this.http.delete(`${this.baseUrl}/cart/${id}`, this.appendToken())
  }
}
