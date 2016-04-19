var app = angular.module('palladioApp', [
	'palladio',
	'palladio.controllers',
	'palladio.services',
	'palladio.directives',
	'palladio.filters',

	'ui.codemirror',
	'ui.bootstrap',
	'ui.router',
	'ui.sortable',
	'ui.select',
	'colorpicker.module',

	'palladioDataUpload',
	'palladioDataDownload',

	// Palette
	'palladioPalette',

	// Filters
  'palladioTimelineComponent',
	'palladioFacetComponent',
	'palladioTimespanComponent',
	// Views
	'palladioListView',
	'palladioMapComponent',
	'palladioTableView',
	'palladioSelectionView',
	'palladioGraphComponent',
	'palladioDurationView',
	'palladioIdiographView']
	)
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('/', {
				url: '/',
				templateUrl: 'partials/start.html',
			})
			.state('/upload', {
				url: '/upload',
				templateUrl: 'partials/upload.html',
				controller: 'UploadRefineCtrl'
			})
			.state('/link', {
				url: '/link',
				templateUrl: 'partials/link.html'
			})
			.state('/visualization', {
				url: '/visualization',
				templateUrl: 'partials/visualization.html',
				controller: 'VisualizationCtrl',
				resolve: {
					data: function (dataService) {
						return dataService.getData();
					}
				}
			});
	});
