package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Register_Entity;
import com.example.demo.Repo.Register_Repo;

@Service
public class Register_Ser {


	@Autowired
	private Register_Repo stu;

	public Register_Entity saveDetails(Register_Entity s) {
		return stu.save(s);
	}
	

	public List<Register_Entity> getAllDetails() {
		List<Register_Entity> arr = new ArrayList<>();
		arr = (List<Register_Entity>) stu.findAll();
		return arr;
		
	}

	public void deleteById(Long Id) {
		stu.deleteById(Id);
	}
	public Register_Entity update(Long Id,Register_Entity s) {
		
		return stu.saveAndFlush(s);
	}

	public Optional<Register_Entity> findById(Long Id) {
		Optional<Register_Entity> stud = stu.findById(Id);
		return stud;
	}

	
}
