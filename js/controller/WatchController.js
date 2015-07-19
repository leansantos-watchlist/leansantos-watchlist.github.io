app.controller('WatchController', ['$scope', '$http', '$routeParams', '$sce', function($scope, $http, $routeParams, $sce){

	$http.get(moviesdata)
		.success(function(response){
			$scope.movies = response.movies;
			
			
			$scope.moviesLink = function(id){
				return $sce.trustAsResourceUrl($scope.movies[id].link);
			};
                        
			$scope.moviesPoster = function(id){
				return $sce.trustAsResourceUrl($scope.movies[id].image);
			};

			// $scope.moviesplayer = function(){
			// 	return $sce.trustAsResourceUrl("http://watchlist.co.nf/html5-video-player/?source=moviesLink("+$scope.getparamId +")&poster=" +$scope.moviesPoster($scope.getparamId));
			// };
			$scope.moviesplayer1 = function(){
				return $sce.trustAsResourceUrl("http://watchlist.co.nf/html5-video-player/?source=moviesSource1("+$scope.getparamId +")&poster=" +$scope.moviesPoster($scope.getparamId));
			};
			$scope.moviesplayer2 = function(){
				return $sce.trustAsResourceUrl("http://watchlist.co.nf/html5-video-player/?source=moviesSource2("+$scope.getparamId +")&poster=" +$scope.moviesPoster($scope.getparamId));
			};
			$scope.moviesplayer3 = function(){
				return $sce.trustAsResourceUrl("http://watchlist.co.nf/html5-video-player/?source=moviesSource3("+$scope.getparamId +")&poster=" +$scope.moviesPoster($scope.getparamId));
			};
		
		});
	$http.get(seriesdata)
		.success(function(response){
			$scope.tvseries = response.series;


			$scope.seriesLink = function(id){
				return $sce.trustAsResourceUrl($scope.tvseries[id].link);
			};
                        
            $scope.seriesPoster = function(id){
				return $sce.trustAsResourceUrl($scope.tvseries[id].image);
			};

			$scope.seriesplayer = function(){
				return $sce.trustAsResourceUrl("http://watchlist.co.nf/html5-video-player/?source=seriesLink("+$scope.getparamId +")&poster=" +$scope.seriesPoster($scope.getparamId));
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