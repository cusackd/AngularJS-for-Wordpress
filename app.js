var searchApp = angular.module('blogApp', [
    'ngRoute',
    'ngResource',
    'blogControllers',
    'articlesFactory'
]);

searchApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
    })
    .when('/single/:postID', {
        templateUrl: 'views/single.html',
        controller: 'SingleCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);

