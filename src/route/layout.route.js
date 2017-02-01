'use strict';

function LayoutRoute($stateProvider) {
	$stateProvider
		.state('template', {
			abstract: true,
			templateUrl: 'template/template.html'
		})
		.state('layout', {
			parent: 'template',
			abstract: true,
			views: {
				'header': {
					templateUrl: 'template/header.html',
					controller: 'HeaderCtrl'
				},
				'content': {
					template: '<div ui-view></div>'
				},
				'footer': {
					templateUrl: 'template/footer.html',
					controller: 'FooterCtrl'
				}
			}
		});
}

export default LayoutRoute;
