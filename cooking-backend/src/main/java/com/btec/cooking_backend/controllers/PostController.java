//package com.btec.cooking_backend.controllers;
//
//import com.btec.cooking_backend.model.Post;
//import com.btec.cooking_backend.repositories.PostRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/posts")
//public class PostController {
//    @Autowired
//    private PostRepository postRepository;
//
//    @GetMapping
//    public List<Post> getAllPostsList() {
//        return postRepository.findAll();
//    }
//
//    @PostMapping
//    public Post createPost(@RequestBody Post post) {
//        return postRepository.save(post);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deletePost(@PathVariable String id) {
//        postRepository.deleteById(id);
//    }
//}
