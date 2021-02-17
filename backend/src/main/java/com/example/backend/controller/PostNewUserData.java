package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Format.UserRegistration;
import com.example.backend.Repository.NewUserRegistration;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PostNewUserData {

	@Autowired
	NewUserRegistration u;
	@PostMapping("/newuser")
	@ResponseBody
	public boolean postNewUser(@RequestBody UserRegistration ur){
		System.out.println(ur.getfirstName());
		u.newUserRegistration(ur);
		return true;
	}	
}


