angular.module('app.article')

.factory('articleFactory',['$resource', function($resource){

    return $resource('http://crime.ie/wp-json/posts/:articleID', {}, {
        get:    {method: 'GET'}
    });

}]);
