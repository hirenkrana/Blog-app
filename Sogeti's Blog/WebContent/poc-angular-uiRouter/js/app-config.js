define([
    'app',
	'js/controllers/blog-controller'
    ], function(app) {

    return app.config(['$stateProvider', '$urlRouterProvider', '$logProvider',
                       function($stateProvider, $urlRouterProvider, $logProvider) {
    	$logProvider.debugEnabled(true);
    	$urlRouterProvider.otherwise('/');
    	$stateProvider
    	.state('home', {
            url: '/',
            templateUrl: '../poc-angular-uiRouter/partials/home.html',
            controller: 'blogController',
            controllerAs: 'blogController'
        })
        .state('get-article-details', {
            url: '/article-details',
            templateUrl: '../poc-angular-uiRouter/partials/article-details.html',
            controller: 'blogController',
            controllerAs: 'blogController'
            	
        })
    	.state('get-all-emp', {
            url: '/all-emp',
            templateUrl: '../poc-angular-uiRouter/partials/all-employee.html',
            controller: 'blogController',
            controllerAs: 'blogController',
            onEnter: function ($log) {
                $log.debug('Entering the get-all-emp state.');
            },
            onExit: function ($log) {
                $log.debug('Exiting the get-all-emp state.');
            }
        })
        .state('get-emp-details', {
            url: '/empi-details',
            templateUrl: '../poc-angular-uiRouter/partials/employee-details.html',
            controller: 'blogController',
            controllerAs: 'blogController'
            	
        })
        .state('get-emp-details-param', {
            url: '/empi-details/param/:id',
            //here while passing url param we can add expected value as regular expression as
            ////empi-details/param/{id:[0-9]}
            templateUrl: '../poc-angular-uiRouter/partials/employee-details.html',
            controller: 'blogController',
            controllerAs: 'blogController',
            params: {
    			fromParam: { value: true }
            },
			data: {
                    name: 'My Name',
                    desc: 'Amol'
            }
            	
        });
    }]);
});