package org.sogeti.webservices.rest.blogwebsite.services;

import java.util.List;

import org.sogeti.webservices.rest.blogwebsite.domain.Article;
import org.sogeti.webservices.rest.blogwebsite.domain.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticleService {
	@Autowired
	private ArticleRepository articleRepository;
	 
	// --------------------------------------------
	// CRUD OPERATIONS FOR PARENT RECORDS (ArticleS)
	public Article createArticle(Article article) {
	        return articleRepository.save(article);
	}
	 
	public List findAll() {
	   return articleRepository.findAll();
	}
	 
	public Article findArticle(long id) {
	   return articleRepository.findOne(id);
	}
	 
	public Article updateArticle(long id, Article article) {
		Article updatedArticle = findArticle(id);
	        if (!article.getArticleId().equals(updatedArticle.getArticleId())) {
	            updatedArticle.setText(article.getText());
	            updatedArticle.setImage(article.getImage());
	            updatedArticle.setTitle(article.getText());
	            return articleRepository.save(updatedArticle);
	        } else
	            return null;
	    }
	 
	    public void deleteById(long id) {
	        articleRepository.delete(id);
	    }
	 
	    @Autowired
	    private CommentRepository commentRepository;
	 
	    // --------------------------------------------
	    // CRUD OPERATIONS FOR CHILD RECORDS (COMMENTS)
	 
	public Article createComment(long articleId, Comment comment) {
	        Article article = findArticle(articleId);
	        comment.setArticle(article);
	        article.getComments().add(comment);
	        return articleRepository.save(article);
	}
	 
	public List findAllComments(long articleId) {
	        return findArticle(articleId).getComments();
	}
	 
	    public Comment findComment(long id) {
	        return commentRepository.findOne(id);
	    }
	 
	    public Comment updateComment(long commentId, Comment comment) {
	        Comment savedComment = commentRepository.findOne(commentId);
	        savedComment.setText(comment.getText());
	        commentRepository.save(savedComment);
	        return savedComment;
	    }
	 
	    public void deleteCommentById(long id) {
	        commentRepository.delete(id);
	    }

}
