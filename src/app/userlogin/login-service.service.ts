import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Login{
  constructor(public username: String,
    public password: String){}
}
/*
export class LoginServiceService {
  constructor(private httpClient:HttpClient) { }/*
  postData(login: Login){
    return this.httpClient.post<any>('http://localhost:8080/contactdata',login);
  }
}*/