(function(){
angular.module('mainModule', ['ui.router'])

	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		/*$urlRouterProvider.otherwise("/about");*/

		$stateProvider
			.state('about', {
				url: '/about',
				templateUrl: 'app/views/about.html'
			})
			.state('nawigacja', {
				url: '/nawigacja',
				templateUrl: 'app/views/nawigacja.html'
			})
			.state('cbradio', {
				url: '/cbradio',
				templateUrl: 'app/views/cbradio.html'
			})
			.state('montaz', {
				url: '/montaz',
				templateUrl: 'app/views/montaz.html'
			})			
			.state('inne', {
				url: '/inne',
				templateUrl: 'app/views/inne.html'
			});
	}])

	.controller('mainController', ['$scope', '$http', function($scope, $http) {
		$scope.picsNum = 0;

		var responsePromise = $http.get("app/numberoffiles.php");

		responsePromise.success(function(data, headers) {
			$scope.picsNum = data;
			console.log('picsNum: ' + $scope.picsNum);
		});
		responsePromise.error(function() {
			console.log('http get request Failed!');
		})
	}])

	.directive('navbar', function(){
		// Runs during compile
		return {
			restrict: 'E',
			templateUrl: 'app/views/navbar.html',
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	})

	.directive('header', function(){
		// Runs during compile
		return {
			restrict: 'E',
			templateUrl: 'app/views/header.html',
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	})

	.directive('footer', function(){
		// Runs during compile
		return {
			restrict: 'E',
			templateUrl: 'app/views/footer.html',
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	});
})();