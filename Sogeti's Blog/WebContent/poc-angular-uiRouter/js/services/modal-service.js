define([
   'angular',
   'app'
    ], function(angular, app) {

    return app.factory('modalService',[ function() {
    	selectedEmp = {};
    	selectedArticle = {};
    	
    	getSelectedEmp = function(){
    		return selectedEmp;
    	};
    	setSelectedEmp = function(emp){
    		selectedEmp = emp;
    	};
    	
    	getSelectedArticle = function(){
    		return selectedArticle;
    	};
    	setSelectedArticle = function(article){
    		selectedArticle = article;
    	};
    	return {
    		getSelectedEmp : getSelectedEmp,
    		setSelectedEmp : setSelectedEmp,
    		getSelectedArticle : getSelectedArticle,
    		setSelectedArticle : setSelectedArticle
    	};
    }]);

});