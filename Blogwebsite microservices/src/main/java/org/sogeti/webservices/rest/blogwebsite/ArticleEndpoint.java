package org.sogeti.webservices.rest.blogwebsite;

import java.util.List;

import org.sogeti.webservices.rest.blogwebsite.domain.Article;
import org.sogeti.webservices.rest.blogwebsite.domain.Comment;
import org.sogeti.webservices.rest.blogwebsite.services.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ArticleEndpoint {
	@Autowired
	private ArticleService articleService;
	 
	 // --------------------------------------------
	 // CRUD OPERATIONS FOR PARENT RECORDS (articleS)
	 @PostMapping("/articles")
	 public Article createarticle(@RequestBody Article article) {
     Article savedarticle = articleService.createArticle(article);
     	return savedarticle;
	 }
	 
	 @GetMapping("/articles")
	 public List getAllarticles() {
	    return articleService.findAll();
	 }
	    
	 @GetMapping("/articles/{id}")
	 public Article getArticle(@PathVariable long id) {
	        return articleService.findArticle(id);
	 }
	 
	 @PutMapping("/articles/{id}")
	 public Article changeArticle(@PathVariable long id, @RequestBody Article article) {
	     return articleService.updateArticle(id, article);
	 }
	 
	 @DeleteMapping("/articles/{id}")
	 public String deleteArticle(@PathVariable long id) {
	    articleService.deleteById(id);
        return String.format("article id #%d successfully deleted", id);
    }
	 
    // --------------------------------------------
    // CRUD OPERATIONS FOR CHILD RECORDS (COMMENTS)
	 
    @PostMapping("/articles/{id}/comments")
    public Article createComment(@PathVariable long id, @RequestBody Comment comment) {
        return articleService.createComment(id, comment);
    }
    
    @PostMapping("/articles/{id}/postcomment")
    public Article createComment(@PathVariable long id, @RequestBody String text) {
    	Comment comment = new Comment();
    	comment.setText(text);
        return articleService.createComment(id, comment);
    }
	 
    @GetMapping("/articles/{id}/comments")
    public List getAllComments(@PathVariable long id) {
        return articleService.findAllComments(id);
    }
	 
    @GetMapping("/articles/comments/{id}")
    public Comment getComment(@PathVariable long id) {
       return articleService.findComment(id);
    }
	 
    @PutMapping("/articles/comments/{id}")
    public Comment changeComment(@PathVariable long id, @RequestBody Comment comment) {
        return articleService.updateComment(id, comment);
    }
	 
    @DeleteMapping("/articles/comments/{id}")
    public String deleteComment(@PathVariable long id) {
       articleService.deleteCommentById(id);
       return String.format("Comment id %d successfully deleted", id);
    }

}
