app.controller('HomeController', ['$scope', '$http', function($scope, $http){
	$http.get(moviesdata)
		.success(function(response){
			$scope.movies = response.movies;
		});

	$http.get(seriesdata)
		.success(function(response){
			$scope.tvseries = response.series;
		});

	$http.get(tvseriesdata)
		.success(function(response){
			$scope.seriesList = response.tvseries;
			$scope.theflashS01 = response.tvseries[0].season[0].episode;
			
		});

}])