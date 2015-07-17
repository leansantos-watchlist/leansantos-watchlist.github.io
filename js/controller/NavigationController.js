app.controller('NavigationController',['$scope', '$routeParams', function($scope, $routeParams){
	
	$scope.navigation = 
	{
		// Homepage Navigation -----index.html
		mainNav:[
			{nav: 'MOVIES', link: '#/movies'},
			{nav: 'TV SERIES', link: '#/tv-series'},
			{nav: 'ANIME', link: '#/anime'},
				],
		sideNav:[
			{nav: 'Action', link: '#/action'},
			{nav: 'Drama', link: '#/drama'},
			{nav: 'Comedy', link: '#/getName/'+$scope.name}
				]
	}
	$scope.recentlyUpdate =
	{
		updatedVideos:[
			{title: 'Jurassic World', update: 'fixed', link: '#/movies/17/watch-Jurassic_World'},
			{title: 'Insurgent', update: 'fixed', link: '#/movies/15/watch-Insurgent'},
			{title: 'Lupin III', update: 'fixed', link: '#/movies/13/watch-Lupin_III'},
			{title: 'The Flash S01-E07', update: 'fixed', link: '#/tv-series/6/watch-The%20Flash_S01-E07'},
			{title: 'Dawn of the Planet Apes', update: 'fixed', link: '#/movies/7/watch-Dawn_of_the_Planet_of_the_Apes'}
				 ]
	}

}]);