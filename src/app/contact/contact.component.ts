import { Component, OnInit } from '@angular/core';

import { ContactService} from './contact.service';
import {User} from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
  }
  message=""
  name=""
  email=""
  number=""
  subject=""
  constructor(private contactService: ContactService) { }

  userModel=new User(this.message,this.name,this.email,this.number,this.subject);
  
  onSubmit(){
    this.contactService.postData(this.userModel)
      .subscribe(
        response => this.handleSuccessfulResponse(response),
    );

  }
  handleSuccessfulResponse(response){

  }

}
