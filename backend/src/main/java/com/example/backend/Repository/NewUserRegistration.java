package com.example.backend.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.backend.Format.UserRegistration;

@Repository
public class NewUserRegistration {
	@Autowired
	JdbcTemplate jdbcTemplate;
	public void newUserRegistration(UserRegistration user){
		System.out.println(user.getfirstName()+user.getlastName()+user.getEmail()+user.getPhone()+user.getPassword()+user.getCpassword());
		Object []obj={user.getfirstName(),user.getlastName(),user.getEmail(),user.getPhone(),user.getPassword(),user.getCpassword()};
		String query="insert into userregistration (`firstName`, `lastName`, `email`, `phone`, `password`, `cpassword`) VALUES (?,?,?,?,?,?)";
		jdbcTemplate.update(query,obj);
	}
}
