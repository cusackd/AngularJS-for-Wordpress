angular.module('angular-test', [
    'ngRoute',

    'angular-test.home',
    'angular-test.article',
    'angular-test.posts'
])

.config(['$routeProvider', '$sceProvider', function($routeProvider, $sceProvider){
    $sceProvider.enabled(false);
    $routeProvider
    .when('/', {
        templateUrl: 'app/pages/home/home.html',
        controller: 'homeController'
    })
    .when('/posts', {
        templateUrl: 'app/pages/posts/posts-page.template.html',
        controller: 'postsController'
    })
    .when('/article/:id', {
        templateUrl: 'app/pages/article/article-page.template.html',
        controller: 'articleController'
    })
}])
