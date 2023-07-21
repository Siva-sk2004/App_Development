package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.PostJob_Entity;
import com.example.demo.Repository.PostJob_Repo;

@Service

public class PostJob_Ser {
	@Autowired
	private PostJob_Repo stu;

	public PostJob_Entity saveDetails(PostJob_Entity s) {
		return stu.save(s);
	}
	

	public List<PostJob_Entity> getAllDetails() {
		List<PostJob_Entity> arr = new ArrayList<>();
		arr = (List<PostJob_Entity>) stu.findAll();
		return arr;
		
	}

	public void deleteById(Long Id) {
		stu.deleteById(Id);
	}
	public PostJob_Entity update(Long Id,PostJob_Entity s) {
		
		return stu.saveAndFlush(s);
	}

	public Optional<PostJob_Entity> findById(Long Id) {
		Optional<PostJob_Entity> stud = stu.findById(Id);
		return stud;
	}

}
