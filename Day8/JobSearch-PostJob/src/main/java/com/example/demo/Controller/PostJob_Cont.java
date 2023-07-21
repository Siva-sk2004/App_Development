package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.Entity.PostJob_Entity;
import com.example.demo.Service.PostJob_Ser;


public class PostJob_Cont {

	@Autowired
	private PostJob_Ser serv;

	@GetMapping("/show")
	public List<PostJob_Entity> showStudents() {
		return serv.getAllDetails();
	}

	@PostMapping("/add")
	public PostJob_Entity addStudent(@RequestBody PostJob_Entity obj) {
		return serv.saveDetails(obj);
	}

	@DeleteMapping("/delete/{id}")
	public String delStudent(@PathVariable Long Id) {
		serv.deleteById(Id);
		return "Successfully deleted!!!";
	}

	@GetMapping("/show/{id}")
	public Optional<PostJob_Entity> findById(@PathVariable Long Id) {
		return serv.findById(Id);
	}
	@PutMapping("/update/{id}")
	public PostJob_Entity update(@PathVariable Long Id,@RequestBody PostJob_Entity s) {
		return serv.update(Id,s);
	}

}
