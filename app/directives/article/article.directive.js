angular.module('app.article', ['ngResource'])

.directive('article', ['articleFactory', '$sce', function(articleFactory){

    return{
        restrict : 'E',
        scope : {
            articleId : '='
        },
        templateUrl : 'app/directives/article/article.template.html',
        link : function(scope, elem, attrs){

            scope.article = {
                header: '',
                summary: '',
                content: '',
                featured_image: '',
                images: '',
                published_date: '',
                updated_date: '',
                author: '',
                categories: '',
                tags: '',
                comment_status: ''
            };

            scope.article = articleFactory.get({articleID: scope.articleId});

            scope.article.$promise.then(function(data) {
               scope.article = data;
            });


        }
    }

}])
