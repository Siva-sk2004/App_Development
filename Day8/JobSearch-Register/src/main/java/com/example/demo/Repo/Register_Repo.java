package com.example.demo.Repo;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.Entity.Register_Entity;


public interface Register_Repo extends CrudRepository<Register_Entity,Long>{
	Register_Entity saveAndFlush(Register_Entity s);

}
