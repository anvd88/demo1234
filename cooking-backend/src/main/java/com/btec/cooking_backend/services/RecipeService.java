package com.btec.cooking_backend.services;

import com.btec.cooking_backend.entities.Recipe;


import com.btec.cooking_backend.repositories.RecipeRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    public Optional<Recipe> getRecipeById(String id) {
        return recipeRepository.findById(id);
    }

    public Recipe createRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    public Recipe updateRecipe(String id, Recipe updatedRecipe) {
        if (!recipeRepository.existsById(id)) {
            return null;
        }
        updatedRecipe.setId(id);
        return recipeRepository.save(updatedRecipe);
    }

    public boolean deleteRecipe(String id) {
        if (!recipeRepository.existsById(id)) {
            return false;
        }
        recipeRepository.deleteById(id);
        return true;
    }
}
