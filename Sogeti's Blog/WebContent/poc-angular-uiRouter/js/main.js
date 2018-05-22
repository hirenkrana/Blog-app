'use strict';

requirejs.config({
	baseUrl:'', // base path is the common path for js like js/lib
	paths:{
		'jquery': 'js/lib/jquery/jquery',
		'angular': 'js/lib/angular/angular.min',
		'uiRouter': 'js/lib/angular-ui-router/angular-ui-router.min',
		'app': 'js/modules/app-module',
		'app-config': 'js/app-config',
		'domReady': 'js/lib/requirejs-domready/domReady'
	},
	shim:{
		//shim is used to export js as require module for ex. 'angular-route' is not 
		//require module so we shim it
		//this is short form of 
		//'angular-route': {
		//deps:['angular'], - 'angular-route' depends on 'angular'
		//exports:'angular-route' - refer 'angular-route' as require module
		//},
		'angular':{
			deps:['jquery'],
			exports:'angular'
		},
		'uiRouter': {
			deps:['angular']
		},
		'app':{
			deps:['angular']
		},
		'app-config':{
			deps:['angular']
		}
		
	}
});

requirejs( [
    		'angular',
    		'domReady!',//Must use to run uiRouter
    		'uiRouter',
    		'app',
    		'app-config'
    	],
    	function (angular, document ){
			angular.bootstrap(document, ['appModule']);
    	});
