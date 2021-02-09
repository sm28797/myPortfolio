package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Repository.UserRepository;

@RestController
@RequestMapping(path="/user")
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	@GetMapping
	public String check(){
		return "Welcome to java application";
	}
	
	@GetMapping(path="/getusername")
	public List<String> getAllUserNames(){
		return userRepository.getAllUserNames();
		
	}

}
