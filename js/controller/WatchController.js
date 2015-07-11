app.controller('WatchController', ['$scope', '$http', '$routeParams', '$sce', function($scope, $http, $routeParams, $sce){

	$http.get(moviesdata)
		.success(function(response){
			$scope.movies = response.movies;
			
			
			$scope.moviesLink = function(id){
				return $sce.trustAsResourceUrl($scope.movies[id].link);
			};
                        
			$scope.moviesPoster = function(id){
				return $sce.trustAsResourceUrl($scope.movies[id].poster);
			};

			$scope.moviesplayer = function(){
				return $sce.trustAsResourceUrl("http://watchlist.co.nf/html5-video-player?link="+$scope.moviesLink($scope.getparamId)+"&poster="+$scope.moviesPoster($scope.getparamId));
			};

		
		});
	$http.get(seriesdata)
		.success(function(response){
			$scope.tvseries = response.series;


			$scope.seriesLink = function(id){
				return $sce.trustAsResourceUrl($scope.tvseries[id].link);
			};
                        
            $scope.seriesPoster = function(id){
				return $sce.trustAsResourceUrl($scope.tvseries[id].poster);
			};

			$scope.seriesplayer = function(){
				return $sce.trustAsResourceUrl("http://watchlist.co.nf/html5-video-player?link="+$scope.seriesLink($scope.getparamId)+"&poster="+$scope.seriesPoster($scope.getparamId));
			};
		});

			$scope.getparamTitle = $routeParams.title;
			$scope.getparamId = $routeParams.id;
			$scope.getCategory = $routeParams.category;
	
	

}]);

app.directive('movieplayer', function(){
		
	return {
		restrict: 'A',
		template: "<div>Lester</div>"
	};
});




app.directive('videoplayer', function(){

	return{
		restrict: 'A',
		template: "<iframe ng-src='{{'http://watchlist.co.nf/html5-video-player/?link=' +moviesLink(getparamId) +'&poster=' +moviesPoster(getparamId)}}' allowfullscreen></iframe>"
	}

});