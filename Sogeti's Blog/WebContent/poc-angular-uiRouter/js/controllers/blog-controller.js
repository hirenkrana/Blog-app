define([
   'app',
   'js/services/fetch-details-service',
   'js/services/modal-service'
   
    ], function(app) {

    return app.controller('blogController',['$scope', '$state', '$stateParams', '$log', '$http', 'fetchDetailsService', 'modalService', 
                             function($scope, $state, $stateParams, $log, $http, fetchDetailsService, modalService) {
    	$scope.greeting = 'Hello from emp controller !!';
    	$scope.allEmp = fetchDetailsService.getAllEmp();
    	$scope.empDetails = modalService.getSelectedEmp();
    	$scope.articleDetails = modalService.getSelectedArticle();
    	$scope.comment = "";
    	$scope.setInterval=5000;
    	$scope.myInterval = 5000;
    	$scope.noWrapSlides = false;
    	$scope.active = 0;
    	
    	$http.get('http://localhost:8080/articles/').
          then(function(response) {
              $scope.articles = response.data;
        });
    	
    	$scope.postComment = function() {
    		$http.post('http://localhost:8080/articles/{articleDetails.articleId}/postcomment', comment).
    			then(function(response) {
    				$scope.articles = response.data;
    			});
    	};
    	
    	$scope.showEmpDetails = function(emp){
    		//set data in service so it will golobally availabel to all controller
    		//after $state.go('get-emp-details') controller reinitialise so if set data
    		//in controller it will not available ager $state.go();
    		modalService.setSelectedEmp(fetchDetailsService.getEmpDetails(emp));
    		$state.go('get-emp-details');
    	};
    	
    	$scope.showArticleDetails = function(article){
    		//set data in service so it will golobally availabel to all controller
    		//after $state.go('get-emp-details') controller reinitialise so if set data
    		//in controller it will not available ager $state.go();
    		modalService.setSelectedArticle(article);
    		$state.go('get-article-details');
    	};
    	
    	if($stateParams.fromParam){
    		$log.debug('data :- '+$state.current.data.name+', '+$state.current.data.desc);
    		//here we find details using state parameters which pass using url
    		//modalService.setSelectedEmp(fetchDetailsService.getEmpIdDetails($stateParams.id));
    		// !!!! no need to set value in to service so, same controller is loaded !!!!! 
    		//this is because $state.go('get-emp-details'); when we call $state.go('get-emp-details');
    		//new controller is loaded
    		$scope.empDetails = fetchDetailsService.getEmpIdDetails($stateParams.id);
    		//no need to change state from here it is done on html using ui-sref
    		//$state.go('get-emp-details');
    	}
    	
    }]);

});