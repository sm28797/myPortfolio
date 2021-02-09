package com.example.backend.Repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {
	
	@Autowired
	JdbcTemplate jdbcTemplate;

	public List<String> getAllUserNames() {
		// TODO Auto-generated method stub
		List<String> usernameList=new ArrayList<String>();
		usernameList.addAll(jdbcTemplate.queryForList("select name from contact;",String.class));
		return usernameList;
	}

}
