angular.module('angular-test.article', ['app.article'])

.controller('articleController', ['$scope', '$routeParams', function($scope, $routeParams){

    $scope.articleId = $routeParams.id;

}])
