package com.example.demo.Repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.Models.LoginEntity;

public interface LoginRepo extends CrudRepository<LoginEntity , Long> {

	LoginEntity saveAndFlush(LoginEntity s);
		
}
