package com.btec.cooking_backend.entities;

import lombok.Data;

import java.util.List;

@Data
class CookStep {
    private String id;
    private String description;
    private List<String> imageUrls;
    private int order;
}
