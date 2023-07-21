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

import com.example.demo.Entity.Register_Entity;
import com.example.demo.Service.Register_Ser;



public class Register_Cont {

	@Autowired
	private Register_Ser serv;

	@GetMapping("/show")
	public List<Register_Entity> showStudents() {
		return serv.getAllDetails();
	}

	@PostMapping("/add")
	public Register_Entity addStudent(@RequestBody Register_Entity obj) {
		return serv.saveDetails(obj);
	}

	@DeleteMapping("/delete/{id}")
	public String delStudent(@PathVariable Long Id) {
		serv.deleteById(Id);
		return "Successfully deleted!!!";
	}

	@GetMapping("/show/{id}")
	public Optional<Register_Entity> findById(@PathVariable Long Id) {
		return serv.findById(Id);
	}
	@PutMapping("/update/{id}")
	public Register_Entity update(@PathVariable Long Id,@RequestBody Register_Entity s) {
		return serv.update(Id,s);
	}

}
