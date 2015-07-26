app.controller('SeriesController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get(seriesdata)
		.success(function(response){
			$scope.tvseries = response.series;
			
		});

// ALL Searies
	$http.get(tvseriesdata)
		.success(function(response){
			$scope.seriesList = response.tvseries;
			


			$scope.seriesSeason = function(seriesId){
				return response.tvseries[seriesId].season;
			}

			$scope.seriesEpisode = function(seriesId,seasonId){
				return response.tvseries[seriesId].season[seasonId].episode;
			} 
			
			$scope.latestseason = function(getparamId){
				return response.tvseries[getparamId].latestseason.season;
			}
			$scope.latestseasonId = function(getparamId){
				return response.tvseries[getparamId].latestseason.seasonId;
			}
			
		});

		$scope.toogle = function(){
			return $scope.toogle=true;
		};
		

	$scope.getparamTitle = $routeParams.title;
	$scope.getparamId = $routeParams.id;
}])