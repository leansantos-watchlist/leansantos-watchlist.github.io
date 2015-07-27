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
	$http.get(tvseriesdata)
		.success(function(response){
			$scope.seriesList = response.tvseries;

			$scope.tvseries = response.tvseries; 

			$scope.seriesSource1 = function(seriesId,seasonId,episodeId){
				return $sce.trustAsResourceUrl($scope.tvseries[seriesId].season[seasonId].episode[episodeId].source[0].src);
			};
			$scope.seriesPoster = function(seriesId,seasonId,episodeId){
				return $sce.trustAsResourceUrl($scope.tvseries[seriesId].season[seasonId].episode[episodeId].images.img);
			};
                        
			
                        
   //          $scope.seriesPoster = function(id){
			// 	return $sce.trustAsResourceUrl($scope.tvseries[id].image);
			// };

			$scope.tvseriesplayer1 = function(){
				return $sce.trustAsResourceUrl("http://watchlist.co.nf/html5-video-player/?source=seriesSource1("+$scope.tvseriesParams.seriesId+","+$scope.tvseriesParams.seasonId+","+$scope.tvseriesParams.episodeId +")&poster=" +$scope.seriesPoster($scope.tvseriesParams.seriesId,$scope.tvseriesParams.seasonId,$scope.tvseriesParams.episodeId));
			};
			$scope.tvseriesplayer2 = function(){
				return $sce.trustAsResourceUrl("http://watchlist.co.nf/html5-video-player/?source=seriesSource2("+$scope.tvseriesParams.seriesId+","+$scope.tvseriesParams.seasonId+","+$scope.tvseriesParams.episodeId +")&poster=" +$scope.seriesPoster($scope.tvseriesParams.seriesId,$scope.tvseriesParams.seasonId,$scope.tvseriesParams.episodeId));
			};
			$scope.tvseriesplayer3 = function(){
				return $sce.trustAsResourceUrl("http://watchlist.co.nf/html5-video-player/?source=seriesSource3("+$scope.tvseriesParams.seriesId+","+$scope.tvseriesParams.seasonId+","+$scope.tvseriesParams.episodeId +")&poster=" +$scope.seriesPoster($scope.tvseriesParams.seriesId,$scope.tvseriesParams.seasonId,$scope.tvseriesParams.episodeId));
			};
		});

			$scope.getparamTitle = $routeParams.seriesTitle;
			$scope.getparamId = $routeParams.id;
			$scope.getCategory = $routeParams.category;

			$scope.tvseriesParams =
				{
					seriesId: $routeParams.seriesId,
					seasonId: $routeParams.seasonId,
					episodeId: $routeParams.episodeId,
					episodeTitle: $routeParams.episodeTitle
				}
	
	

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