/* Author: Whien 
   FaceBook: sal95610@yahoo.com.tw
   Email: sal95610@gmail.com
   Update: 2014 - 04 - 27 
*/
'use strict';

var sportApp = angular.module('SportApp', ['ngRoute', 'my.tabsLab']);

sportApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'showAction',
			templateUrl: './app/views/showPage.html'
		})

});

sportApp.controller('showAction', function($scope) {

	$scope.explanders = [
		{
			title: 'Click me and open[1]',
			text: 'Hi, I\'m No[1]'
		},
		{
			title: 'Click me and open[2]',
			text: 'Hi, I\'m No[2]'
		},
		{
			title: 'Click me and open[3]',
			text: 'Hi, I\'m No[3]'
		}
	];

});