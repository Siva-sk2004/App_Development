package com.example.demo.Repository;

import org.springframework.data.repository.CrudRepository;
import com.example.demo.Entity.PostJob_Entity;

public interface PostJob_Repo extends CrudRepository <PostJob_Entity ,Long>{
	PostJob_Entity saveAndFlush(PostJob_Entity s);
}
