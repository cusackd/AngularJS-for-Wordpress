var articlesFactory = angular.module('articlesFactory', []);

articlesFactory.factory('articlesFactory', ['$resource', function($resource){

    var baseUrl = 'http://localhost/wordpress/wp-json/',
        articlesFactory = {};

    articlesFactory.getArticlesList = function(){
        return $resource(baseUrl + 'posts').query();
    };

    articlesFactory.getArticlesSingle = function(postID){

    	console.log(postID);
        return $resource(baseUrl + 'posts/' + postID).get();
    };

    return articlesFactory;
}]);
