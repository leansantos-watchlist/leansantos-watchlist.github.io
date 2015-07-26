
// for localhost
// var app = angular.module('mymovieApp', ['ngRoute', 'angularUtils.directives.dirPagination'])
// var moviesdata = "js/data/movies.json"; 
// var seriesdata = "js/data/series.json";
// var tvseriesdata = "js/data/tvseries.json";


var app = angular.module('mymovieApp', ['ngRoute', 'ngAnimate', 'angularUtils.directives.dirPagination'])
var moviesdata = "http://leansantos-watchlist.github.io/js/data/movies.json"; 
var seriesdata = "http://leansantos-watchlist.github.io/js/data/series.json";
var tvseriesdata = "http://leansantos-watchlist.github.io/js/data/tvseries.json";


app.config(['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		})
		.when('/movies', {
			templateUrl: 'partials/movielist.html',
			controller: 'MoviesController'
		})
		.when('/movies/:id/watch-:title', {
			templateUrl: 'partials/watch-movie.html',
			controller: 'WatchController'
		})


		.when('/tv-series', {
			templateUrl: 'partials/serieslist.html',
			controller: 'SeriesController'
		})
		.when('/tv-series/:id/:title', {
			templateUrl: 'partials/tvseries.html',
			controller: 'SeriesController'
		})
		.when('/tv-series/:seriesId-:seasonId-:episodeId/:seriesTitle/watch-:episodeTitle', {
			templateUrl: 'partials/watch-series.html',
			controller: 'WatchController'
		})
		.when('/anime', {
			templateUrl: 'partials/anime.html'
		})
		

		.when('/getName/:fname', {
			templateUrl: 'partials/anime.html'
		})
		.otherwise({
			template: "<h1>Page not found</h1>"
		})
}]);