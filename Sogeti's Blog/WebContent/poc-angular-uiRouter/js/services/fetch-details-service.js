define([
   'angular',
   'app'
    ], function(angular, app) {

    return app.factory('fetchDetailsService',[ function() {
    	var empList = [
		               {
		            	Id:'1', 
		            	Name:'Sam Patel',
		            	DOJ:'10/01/2010',
		            	Dip:'SE'
		               },
		               {
    		            Id:'2', 
    		            Name:'Harry Anand',
    		            DOJ:'05/02/2011',
    		            Dip:'SSE'
    		           },
    		           {
        		        Id:'3', 
        		        Name:'Andrive marks',
        		        DOJ:'06/05/2011',
        		        Dip:'SE'
        		       },
        		       {
            		    Id:'4', 
            		    Name:'Ankita T',
            		    DOJ:'08/08/2013',
            		    Dip:'SSE'
            		   },
		              ];
    	getAllEmployee = function(){
    		return empList;
    	};
    	var baseURL='http://lorempixel.com/960/450/';
    	
    	var articles = [
    		   {
    		         title:'7 Ways to stay Fit',
    		         image:'http://lorempixel.com/960/450/sports/',
    		         text:'Play a sport for 30 minutes a day!'
    		   },
    		   {
    		         title:'Healthly Food',
    		         image:'http://lorempixel.com/960/450/food/',
    		         text:'Food that you should be eating!'
    		   },
    		   {
    		         title:'Relaxing Holidays',
    		         image:'http://lorempixel.com/960/450/nature/',
    		         text:'10 Locations for Nature Lovers!'
    		   }

    		    ];
    	getArticles = function() {
    		return articles;
    	};
    	
    	var comment = [
    		{
    			commentId: 1,
                text: "Hello moto"
    		}
    	];
    	
    	getComment = function() {
    		return comment;
    	};
    	
    	getArticleDetails = function(article){
    		var finalArticle ={};
			angular.forEach(articles, function(articleVal){
				  if(article.title == articleVal.title){
					  finalArticle = articleVal;
    		      }
    		});
			return finalArticle;
    	};
    	
    	getEmpDetails = function(emp){
    		var finalEmp ={};
			angular.forEach(empList, function(empVal){
				  if(emp.Id == empVal.Id){
    		    	  finalEmp = empVal;
    		      }
    		});
			return finalEmp;
    	};
    	getEmpIdDetails = function(id){
    		var finalEmp ={};
			angular.forEach(empList, function(empVal){
				  if(id == empVal.Id){
    		    	  finalEmp = empVal;
    		      }
    		});
			return finalEmp;
    	};
    	return {
    		getAllEmp : getAllEmployee,
    		getArticles:getArticles,
    		getComment:getComment,
    		getArticleDetails : getArticleDetails,
    		getEmpDetails : getEmpDetails,
    		getEmpIdDetails: getEmpIdDetails
    		
    	};
    }]);

});
