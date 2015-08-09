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
			{title: 'Ant-Man', update: 'new', link: '#/movies/19/watch-Ant-Man'},
			{title: 'Mission: Impossible - Rogue Nation', update: 'new', link: '#/movies/18/watch-Mission:_Impossible-Rogue_Nation'},
			{title: 'Lupin III', update: 'fixed', link: '#/movies/13/watch-Lupin_III'},
			{title: 'Focus', update: 'fixed', link: '#/movies/1/watch-Focus'},
			{title: 'Mad Max:Fury Road', update: 'fixed', link: '#/movies/11/watch-Mad_Max:Fury_Road'}
				 ]
	}

}]);