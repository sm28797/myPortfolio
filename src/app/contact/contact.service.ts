import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class User{
  constructor(
    public message: String,
    public name:String,
    public email: String,
    public number: String,
    public subject:String
  ){}
}

@Injectable({
  providedIn: 'root'
})



export class ContactService {

  constructor(private httpClient:HttpClient) { }
  postData(user: User){
    return this.httpClient.post<any>('http://localhost:8080/contactdata',user);
  }
}
