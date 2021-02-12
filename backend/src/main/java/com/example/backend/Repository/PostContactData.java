package com.example.backend.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.backend.Format.ContactDetails;
@Repository
public class PostContactData {
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	public void postDataToContact(ContactDetails cd){
		Object[] obj=new Object[]{ cd.getMessage(),cd.getName(),cd.getEmail(),cd.getNumber(),cd.getSubject() };
		String query="insert into contact (`message`, `name`, `email`, `phone`, `subject`) values (?,?,?,?,?)";
		jdbcTemplate.update(query,obj);
	}
}