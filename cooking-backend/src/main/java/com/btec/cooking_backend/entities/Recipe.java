package com.btec.cooking_backend.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@Document(collection = "recipes")
public class Recipe {
    @Id
    private String id;
    @NotBlank
    private String title;
    @NotBlank
    private String description;
    @NotNull
    private User user;
    @NotNull
    private List<Ingredient> ingredients;
    @NotNull
    private List<CookStep> cookSteps;
    private List<String> imageUrls;
}



