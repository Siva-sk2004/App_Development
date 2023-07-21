package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.FileEntity;

public interface FileRepository extends JpaRepository<FileEntity,Long>{

}
