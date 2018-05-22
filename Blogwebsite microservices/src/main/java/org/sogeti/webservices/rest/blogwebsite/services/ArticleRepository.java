package org.sogeti.webservices.rest.blogwebsite.services;

import org.sogeti.webservices.rest.blogwebsite.domain.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {

}
