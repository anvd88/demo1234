package com.btec.cooking_backend.controllers;
import javax.validation.Valid;
import com.btec.cooking_backend.entities.Recipe;
import com.btec.cooking_backend.repositories.RecipeRepository;
import com.btec.cooking_backend.services.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeService.getAllRecipes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getRecipeById(@PathVariable String id) {
        Optional<Recipe> recipe = recipeService.getRecipeById(id);
        return recipe.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<?> createRecipe(@Valid @RequestBody Recipe recipe) {
        System.out.println("Received Recipe: " + recipe);
        try {
            Recipe savedRecipe = recipeService.createRecipe(recipe);
            return ResponseEntity.ok(savedRecipe);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Invalid Data: " + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateRecipe(@PathVariable String id, @Valid @RequestBody Recipe updatedRecipe) {
        Recipe recipe = recipeService.updateRecipe(id, updatedRecipe);
        return recipe != null ? ResponseEntity.ok(recipe) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRecipe(@PathVariable String id) {
        return recipeService.deleteRecipe(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}

