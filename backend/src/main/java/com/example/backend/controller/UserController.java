package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Format.ContactDetails;
import com.example.backend.Repository.PostContactData;
import com.example.backend.Repository.UserRepository;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@GetMapping(path="/getusername")
	public List<String> getAllUserNames(){
		return userRepository.getAllUserNames();
		
	}
	
	@Autowired
	PostContactData p;
	@PostMapping("/contactdata")
	@ResponseBody
	public boolean submitData(@RequestBody ContactDetails cd){
		
		p.postDataToContact(cd);
		return true;
	}
	

}
