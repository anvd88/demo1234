package com.btec.cooking_backend.repositories;

import com.btec.cooking_backend.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post, String> {
}
