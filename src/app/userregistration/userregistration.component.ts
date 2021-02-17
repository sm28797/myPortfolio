import { Component, OnInit } from '@angular/core';
import {User, RegistrationService} from './registration.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})



export class UserregistrationComponent implements OnInit {
  ngOnInit(): void {
  }
  firstName="";
  lastName="";
  email="";
  phone="";
  password="";
  cpassword="";
  constructor(private regService: RegistrationService) { }
  
  userModel=new User(this.firstName,this.lastName,this.email,this.phone,this.password,this.cpassword);
  
  onSubmit(){
    this.regService.postData(this.userModel)
      .subscribe(
        response => this.handleSuccessfulResponse(response),
    );    

}  

  handleSuccessfulResponse(response: any) {

  }
}
