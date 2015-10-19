angular.module('instapopular', [])
    .factory('instagram', ['$http', function($http){
        return $http.jsonp('https://api.instagram.com/v1/media/popular?client_id=fa127354e66d4c8da164d92edd18ca66&callback=JSON_CALLBACK')
            .success(function(result) {
              return result;
            });
    }]).controller('instapopularCtrl', ['$scope', 'instagram', function($scope, instagram){
        instagram.success(function(result) {
           $scope.medias = result.data;
        });
    }]);
