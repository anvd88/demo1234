package com.btec.cooking_backend.repositories;

import com.btec.cooking_backend.entities.Order;
import com.btec.cooking_backend.entities.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface RecipeRepository extends MongoRepository<Recipe, String> {
    List<Recipe> findByTitleContainingIgnoreCase(String title);
}
