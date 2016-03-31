angular.module('angular-test', [
    'ngRoute',

    'angular-test.home',
    'angular-test.article'
])

.config(['$routeProvider', '$sceProvider', function($routeProvider, $sceProvider){
    $sceProvider.enabled(false);
    $routeProvider
    .when('/', {
        templateUrl: 'app/pages/home/home.html',
        controller: 'homeController'
    })
    .when('/article/:id', {
        templateUrl: 'app/pages/article/article-page.template.html',
        controller: 'articleController'
    })
}])
