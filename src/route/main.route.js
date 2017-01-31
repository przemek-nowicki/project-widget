'use strict';

function MainRoute($stateProvider, $urlRouterProvider, STATE) {
    $stateProvider
        .state(STATE.HOME, {
            url: '/',
            parent: 'layout',
            controller: 'HomeCtrl',
            templateUrl: 'home/home.ctrl.html'
        });

    $urlRouterProvider
        .when('', '/')
        .otherwise('/home');
}

export default MainRoute;
