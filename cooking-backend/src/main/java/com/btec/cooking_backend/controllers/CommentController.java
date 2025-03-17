package com.btec.cooking_backend.controllers;

import com.btec.cooking_backend.model.res.CommentRes;
import com.btec.cooking_backend.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/{productId}")
    public ResponseEntity<List<CommentRes>> getCommentsByProduct(@PathVariable String productId) {
        List<CommentRes> comments = commentService.getCommentsByProduct(productId);
        return ResponseEntity.ok(comments);
    }

    @GetMapping("/replies/{parentId}")
    public ResponseEntity<List<CommentRes>> getReplies(@PathVariable String parentId) {
        List<CommentRes> replies = commentService.getReplies(parentId);
        return ResponseEntity.ok(replies);
    }
}
