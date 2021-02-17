import { Component, OnInit } from '@angular/core';
import {Login} from './login-service.service';
//import {LoginServiceService} from './login-service.service'

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  ngOnInit(): void {
  }
  username = "";
  password = "";
  usernameError = "";
  passwordError = "";
  pattern = /[a-zA-Z]/g;
  ifNotFound = "";
  specialPattern = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/;
 

  /*constructor(private loginService: LoginServiceService
  ) {}*/

  log=new Login(this.username,this.password);

  login(){
    /*
    this.loginService.postData(this.log)
      .subscribe(
        response => this.handleSuccessfulResponse(response),
    );
    console.log(this.log);
    
  }
  handleSuccessfulResponse(response) {
*/
  }

}
