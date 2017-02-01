'use strict';

import HomeCtrl from './home.ctrl';

describe('home.ctrl.spec.js', () => {
    let $scope;
    let $rootScope;

    beforeEach(() => {
        angular.mock.inject((_$q_, _$rootScope_) => {
            $rootScope = _$rootScope_;
        });
        $scope = $rootScope.$new();
    });

    it('should check if true is equal to true', () => {
        createController();

        expect(true).toEqual(true);
    });

    function createController() {
        return new HomeCtrl(
            $scope
        );
    }
});