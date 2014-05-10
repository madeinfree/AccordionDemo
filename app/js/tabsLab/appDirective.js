'use strict'

var appDirective = angular.module('my.tabsLab', []);

appDirective.directive('accordion', [ '$rootScope', function($rootScope) {
	return {
		restrict: 'EA',
		replace: true,
		transclude: true,
		template: '<div ng-transclude></div>',
		controller: function() {
			var expanders = [];
			this.gotOpened = function(selectedExpander) {
				angular.forEach(expanders, function(expander) {
					if(selectedExpander != expander) {
						expander.showMe = false;
					};
				});
			};
			this.addExpander = function(expander) {
				expanders.push(expander);
			};
		}
	}
}]);

appDirective.directive('expander', function() {
	return {
		restrict: 'EA',
		replace: true,
		transclude: true,
		require: '^?accordion',
		scope: { title: '=expanderTitle' },
		template: '<div>' +
								'<div class="title" ng-click="toogle();">{{title}}</div>' +
								'<div class="body" ng-show="showMe" ng-transclude></div>' +
							'</div>',
		link: function(scope, element, attrs, accordionController) {
			scope.showMe = false;
			accordionController.addExpander(scope);
			scope.toogle = function toogle() {
				scope.showMe = !scope.showMe;
				accordionController.gotOpened(scope);
			};
		}
	}
});