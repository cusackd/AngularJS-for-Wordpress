var blogControllers = angular.module('blogControllers', []);

blogControllers.controller('ListCtrl', ['$scope', '$resource', 'articlesFactory', function($scope, $resource, articlesFactory){

    articlesFactory.getArticlesList().$promise.then(function(data){
    	console.log('Articles Stuff');
    	$scope.articles = data;
    }, 
    	function(error){
    		console.log('Error');
		}
    );

}]);

blogControllers.controller('SingleCtrl', ['$scope', '$resource', '$routeParams', '$sce', '$location', 'articlesFactory', function($scope, $resource, $routeParams, $sce, $location, articlesFactory){

    articlesFactory.getArticlesSingle($routeParams.postID).$promise.then(function(data){
        $scope.article = data;
    }, 
        function(error){
            console.log('Error');
        }
    );

    $scope.toTrustedHTML = function( html ){
        return $sce.trustAsHtml( html );
    };

    $scope.locationURL = encodeURIComponent($location.absUrl());


}]);