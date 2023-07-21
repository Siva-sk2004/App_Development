package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Models.LoginEntity;
import com.example.demo.Repository.LoginRepo;


@Service
public class LoginSer {

	@Autowired
	private LoginRepo stu;

	public LoginEntity saveDetails(LoginEntity s) {
		return stu.save(s);
	}
	

	public List<LoginEntity> getAllDetails() {
		List<LoginEntity> arr = new ArrayList<>();
		arr = (List<LoginEntity>) stu.findAll();
		return arr;
		
	}

	public void deleteById(Long Id) {
		stu.deleteById(Id);
	}
	public LoginEntity update(Long Id,LoginEntity s) {
		
		return stu.saveAndFlush(s);
	}

	public Optional<LoginEntity> findById(Long Id) {
		Optional<LoginEntity> stud = stu.findById(Id);
		return stud;
	}

	
}
