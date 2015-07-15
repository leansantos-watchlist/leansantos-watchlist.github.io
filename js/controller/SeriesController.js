app.controller('SeriesController', ['$scope', '$http', function($scope, $http){
	$http.get(seriesdata)
		.success(function(response){
			$scope.tvseries = response.series;
			
		});


	// $http.get(tvseriesdata)
	// 	.success(function(response){
	// 		$scope.testing = response.tvseries;
	// 		$scope.season = response.tvseries[0].season;
	// 		$scope.episode = response.tvseries[0].season[1].episode;

	// 		$scope.seasonid = "";
	// 		console.log(response.tvseries[0].season)
			

	// 		$scope.tvseries = function(id){
	// 			return response.tvseries[id].id;
	// 		};
	// 		$scope.season = function(id){
	// 			return response.tvseries[id].id;
	// 		}
	// 	});
}])