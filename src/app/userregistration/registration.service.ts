import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export class User{
  constructor(public firstName:String,
    public lastName:String,
    public email:String,
    public phone:String,
    public password:String,
    public cpassword:String
    ){}
}
@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  constructor(private httpClient:HttpClient) { }
  postData(user: User){
    console.log(user);
    return this.httpClient.post<any>('http://localhost:8080/newuser',user);
  }
}
