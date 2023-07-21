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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Models.LoginEntity;
import com.example.demo.Service.LoginSer;

@RestController
public class LoginCont {

	@Autowired
	private LoginSer serv;

	@GetMapping("/show")
	public List<LoginEntity> showStudents() {
		return serv.getAllDetails();
	}

	@PostMapping("/add")
	public LoginEntity addStudent(@RequestBody LoginEntity obj) {
		return serv.saveDetails(obj);
	}

	@DeleteMapping("/delete/{id}")
	public String delStudent(@PathVariable Long Id) {
		serv.deleteById(Id);
		return "Successfully deleted!!!";
	}

	@GetMapping("/show/{id}")
	public Optional<LoginEntity> findById(@PathVariable Long Id) {
		return serv.findById(Id);
	}
	@PutMapping("/update/{id}")
	public LoginEntity update(@PathVariable Long Id,@RequestBody LoginEntity s) {
		return serv.update(Id,s);
	}

}
