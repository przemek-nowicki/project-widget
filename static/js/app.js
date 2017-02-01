(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _angular = require('angular');

var angular = _interopRequireWildcard(_angular);

require('angular-ui-router');

require('./constants');

require('./route');

require('./home');

require('./template');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

angular.module('widgetProject', ['widgetProject.constants', 'widgetProject.route', 'widgetProject.template', 'widgetProject.home']);

angular.bootstrap(document, ['widgetProject']);

},{"./constants":3,"./home":6,"./route":7,"./template":10,"angular":"angular","angular-ui-router":"angular-ui-router"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    URL: '/api'
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angular = require('angular');

var angular = _interopRequireWildcard(_angular);

var _api = require('./api.constants');

var _api2 = _interopRequireDefault(_api);

var _stateConstnats = require('./state.constnats.js');

var _stateConstnats2 = _interopRequireDefault(_stateConstnats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var constantsModule = angular.module('widgetProject.constants', []).constant('API', _api2.default).constant('STATE', _stateConstnats2.default);

exports.default = constantsModule;

},{"./api.constants":2,"./state.constnats.js":4,"angular":"angular"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    ROOT: 'root',
    PARENT: 'parent',
    HOME: 'home'
};

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
                     value: true
});

var _angular = require('angular');

var angular = _interopRequireWildcard(_angular);

var _home = require('./home.ctrl');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var homeModule = angular.module('widgetProject.home', []).controller('HomeCtrl', _home2.default);

exports.default = homeModule;

},{"./home.ctrl":5,"angular":"angular"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angular = require('angular');

var angular = _interopRequireWildcard(_angular);

var _layout = require('./layout.route');

var _layout2 = _interopRequireDefault(_layout);

var _main = require('./main.route');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var routerModule = angular.module('widgetProject.route', ['ui.router']).config(_layout2.default).config(_main2.default).config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});

exports.default = routerModule;

},{"./layout.route":8,"./main.route":9,"angular":"angular"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
function LayoutRoute($stateProvider) {
	$stateProvider.state('template', {
		abstract: true,
		templateUrl: 'template/template.html'
	}).state('layout', {
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

exports.default = LayoutRoute;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function MainRoute($stateProvider, $urlRouterProvider, STATE) {
    $stateProvider.state(STATE.HOME, {
        url: '/',
        parent: 'layout',
        controller: 'HomeCtrl',
        templateUrl: 'home/home.ctrl.html'
    });

    $urlRouterProvider.when('', '/').otherwise('/home');
}

exports.default = MainRoute;

},{}],10:[function(require,module,exports){
'use strict';

// file automatically generated by angular-template-cache

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templatesModule = _angular2.default.module('widgetProject.template', []).run(['$templateCache', function ($templateCache) {
	$templateCache.put('home/home.ctrl.html', '<p>Welcome</p>');

	$templateCache.put('template/footer.html', '<h1>Footer</h1>');

	$templateCache.put('template/header.html', '<h1>Header</h1>');

	$templateCache.put('template/template.html', '<header ui-view="header" class="header"></header>\n' + '<div ui-view="content"></div>\n' + '<footer ui-view="footer" class="footer"></footer>');
}]);exports.default = templatesModule;

},{"angular":"angular"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyIsInNyY1xcY29uc3RhbnRzXFxhcGkuY29uc3RhbnRzLmpzIiwic3JjXFxjb25zdGFudHNcXGluZGV4LmpzIiwic3JjXFxjb25zdGFudHNcXHN0YXRlLmNvbnN0bmF0cy5qcyIsInNyY1xcaG9tZVxcaG9tZS5jdHJsLmpzIiwic3JjXFxob21lXFxpbmRleC5qcyIsInNyY1xccm91dGVcXGluZGV4LmpzIiwic3JjXFxyb3V0ZVxcbGF5b3V0LnJvdXRlLmpzIiwic3JjXFxyb3V0ZVxcbWFpbi5yb3V0ZS5qcyIsInNyY1xcdGVtcGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQTs7SUFBWSxPOztBQUVaOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsUUFDSyxNQURMLENBQ1ksZUFEWixFQUM2QixDQUNyQix5QkFEcUIsRUFFckIscUJBRnFCLEVBR3JCLHdCQUhxQixFQUlyQixvQkFKcUIsQ0FEN0I7O0FBUUEsUUFBUSxTQUFSLENBQWtCLFFBQWxCLEVBQTRCLENBQUMsZUFBRCxDQUE1Qjs7O0FDbkJBOzs7OztrQkFFZTtBQUNYLFNBQUs7QUFETSxDOzs7QUNGZjs7Ozs7O0FBRUE7O0lBQVksTzs7QUFFWjs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sa0JBQWtCLFFBQ25CLE1BRG1CLENBQ1oseUJBRFksRUFDZSxFQURmLEVBRW5CLFFBRm1CLENBRVYsS0FGVSxpQkFHbkIsUUFIbUIsQ0FHVixPQUhVLDJCQUF4Qjs7a0JBS2UsZTs7O0FDWmY7Ozs7O2tCQUVlO0FBQ1gsVUFBTSxNQURLO0FBRVgsWUFBUSxRQUZHO0FBR1gsVUFBTTtBQUhLLEM7OztBQ0ZmOzs7Ozs7a0JBRWUsWUFBTSxDQUFFLEM7OztBQ0Z2Qjs7Ozs7O0FBRUE7O0lBQVksTzs7QUFFWjs7Ozs7Ozs7QUFFQSxJQUFNLGFBQWEsUUFDRyxNQURILENBQ1Usb0JBRFYsRUFDZ0MsRUFEaEMsRUFFRyxVQUZILENBRWMsVUFGZCxpQkFBbkI7O2tCQUllLFU7OztBQ1ZmOzs7Ozs7QUFFQTs7SUFBWSxPOztBQUNaOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTSxlQUFlLFFBQ2hCLE1BRGdCLENBQ1QscUJBRFMsRUFDYyxDQUFDLFdBQUQsQ0FEZCxFQUVoQixNQUZnQixtQkFHaEIsTUFIZ0IsaUJBSWhCLE1BSmdCLENBSVQsVUFBUyxpQkFBVCxFQUE0QjtBQUNoQyxzQkFBa0IsU0FBbEIsQ0FBNEIsSUFBNUI7QUFDSCxDQU5nQixDQUFyQjs7a0JBUWUsWTs7O0FDZGY7Ozs7O0FBRUEsU0FBUyxXQUFULENBQXFCLGNBQXJCLEVBQXFDO0FBQ3BDLGdCQUNFLEtBREYsQ0FDUSxVQURSLEVBQ29CO0FBQ2xCLFlBQVUsSUFEUTtBQUVsQixlQUFhO0FBRkssRUFEcEIsRUFLRSxLQUxGLENBS1EsUUFMUixFQUtrQjtBQUNoQixVQUFRLFVBRFE7QUFFaEIsWUFBVSxJQUZNO0FBR2hCLFNBQU87QUFDTixhQUFVO0FBQ1QsaUJBQWEsc0JBREo7QUFFVCxnQkFBWTtBQUZILElBREo7QUFLTixjQUFXO0FBQ1YsY0FBVTtBQURBLElBTEw7QUFRTixhQUFVO0FBQ1QsaUJBQWEsc0JBREo7QUFFVCxnQkFBWTtBQUZIO0FBUko7QUFIUyxFQUxsQjtBQXNCQTs7a0JBRWMsVzs7O0FDM0JmOzs7OztBQUVBLFNBQVMsU0FBVCxDQUFtQixjQUFuQixFQUFtQyxrQkFBbkMsRUFBdUQsS0FBdkQsRUFBOEQ7QUFDMUQsbUJBQ0ssS0FETCxDQUNXLE1BQU0sSUFEakIsRUFDdUI7QUFDZixhQUFLLEdBRFU7QUFFZixnQkFBUSxRQUZPO0FBR2Ysb0JBQVksVUFIRztBQUlmLHFCQUFhO0FBSkUsS0FEdkI7O0FBUUEsdUJBQ0ssSUFETCxDQUNVLEVBRFYsRUFDYyxHQURkLEVBRUssU0FGTCxDQUVlLE9BRmY7QUFHSDs7a0JBRWMsUzs7O0FDaEJmOztBQUVBOzs7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTSxrQkFBa0Isa0JBQ3RCLE1BRHNCLENBQ2Ysd0JBRGUsRUFDVyxFQURYLEVBRXRCLEdBRnNCLENBRWxCLENBQUMsZ0JBQUQsRUFBbUIsVUFBUyxjQUFULEVBQXlCO0FBQ2hELGdCQUFlLEdBQWYsQ0FBbUIscUJBQW5CLEVBQTBDLGdCQUExQzs7QUFFQSxnQkFBZSxHQUFmLENBQW1CLHNCQUFuQixFQUEyQyxpQkFBM0M7O0FBRUEsZ0JBQWUsR0FBZixDQUFtQixzQkFBbkIsRUFBMkMsaUJBQTNDOztBQUVBLGdCQUFlLEdBQWYsQ0FBbUIsd0JBQW5CLEVBQTZDLHdEQUM1QyxpQ0FENEMsR0FFNUMsbURBRkQ7QUFHQSxDQVZJLENBRmtCLENBQXhCLEMsa0JBZWUsZSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuaW1wb3J0ICdhbmd1bGFyLXVpLXJvdXRlcic7XHJcblxyXG5pbXBvcnQgJy4vY29uc3RhbnRzJztcclxuaW1wb3J0ICcuL3JvdXRlJztcclxuaW1wb3J0ICcuL2hvbWUnO1xyXG5pbXBvcnQgJy4vdGVtcGxhdGUnO1xyXG5cclxuYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnd2lkZ2V0UHJvamVjdCcsIFtcclxuICAgICAgICAnd2lkZ2V0UHJvamVjdC5jb25zdGFudHMnLFxyXG4gICAgICAgICd3aWRnZXRQcm9qZWN0LnJvdXRlJyxcclxuICAgICAgICAnd2lkZ2V0UHJvamVjdC50ZW1wbGF0ZScsXHJcbiAgICAgICAgJ3dpZGdldFByb2plY3QuaG9tZSdcclxuICAgIF0pO1xyXG5cclxuYW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsnd2lkZ2V0UHJvamVjdCddKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgVVJMOiAnL2FwaSdcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuXHJcbmltcG9ydCBBUEkgZnJvbSAnLi9hcGkuY29uc3RhbnRzJztcclxuaW1wb3J0IFNUQVRFIGZyb20gJy4vc3RhdGUuY29uc3RuYXRzLmpzJztcclxuXHJcbmNvbnN0IGNvbnN0YW50c01vZHVsZSA9IGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3dpZGdldFByb2plY3QuY29uc3RhbnRzJywgW10pXHJcbiAgICAuY29uc3RhbnQoJ0FQSScsIEFQSSlcclxuICAgIC5jb25zdGFudCgnU1RBVEUnLCBTVEFURSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25zdGFudHNNb2R1bGU7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgUk9PVDogJ3Jvb3QnLFxyXG4gICAgUEFSRU5UOiAncGFyZW50JyxcclxuICAgIEhPTUU6ICdob21lJ1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7fTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuaW1wb3J0IEhvbWVDdHJsIGZyb20gJy4vaG9tZS5jdHJsJztcclxuXHJcbmNvbnN0IGhvbWVNb2R1bGUgPSBhbmd1bGFyXHJcbiAgICAgICAgICAgICAgICAgICAgIC5tb2R1bGUoJ3dpZGdldFByb2plY3QuaG9tZScsIFtdKVxyXG4gICAgICAgICAgICAgICAgICAgICAuY29udHJvbGxlcignSG9tZUN0cmwnLCBIb21lQ3RybCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lTW9kdWxlO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5pbXBvcnQgTGF5b3V0Um91dGUgZnJvbSAnLi9sYXlvdXQucm91dGUnO1xyXG5pbXBvcnQgTWFpblJvdXRlIGZyb20gJy4vbWFpbi5yb3V0ZSc7XHJcblxyXG5jb25zdCByb3V0ZXJNb2R1bGUgPSBhbmd1bGFyXHJcbiAgICAubW9kdWxlKCd3aWRnZXRQcm9qZWN0LnJvdXRlJywgWyd1aS5yb3V0ZXInXSlcclxuICAgIC5jb25maWcoTGF5b3V0Um91dGUpXHJcbiAgICAuY29uZmlnKE1haW5Sb3V0ZSlcclxuICAgIC5jb25maWcoZnVuY3Rpb24oJGxvY2F0aW9uUHJvdmlkZXIpIHtcclxuICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlck1vZHVsZTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXRSb3V0ZSgkc3RhdGVQcm92aWRlcikge1xyXG5cdCRzdGF0ZVByb3ZpZGVyXHJcblx0XHQuc3RhdGUoJ3RlbXBsYXRlJywge1xyXG5cdFx0XHRhYnN0cmFjdDogdHJ1ZSxcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS90ZW1wbGF0ZS5odG1sJ1xyXG5cdFx0fSlcclxuXHRcdC5zdGF0ZSgnbGF5b3V0Jywge1xyXG5cdFx0XHRwYXJlbnQ6ICd0ZW1wbGF0ZScsXHJcblx0XHRcdGFic3RyYWN0OiB0cnVlLFxyXG5cdFx0XHR2aWV3czoge1xyXG5cdFx0XHRcdCdoZWFkZXInOiB7XHJcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2hlYWRlci5odG1sJyxcclxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdIZWFkZXJDdHJsJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J2NvbnRlbnQnOiB7XHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJzxkaXYgdWktdmlldz48L2Rpdj4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnZm9vdGVyJzoge1xyXG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9mb290ZXIuaHRtbCcsXHJcblx0XHRcdFx0XHRjb250cm9sbGVyOiAnRm9vdGVyQ3RybCdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRSb3V0ZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gTWFpblJvdXRlKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsIFNUQVRFKSB7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZShTVEFURS5IT01FLCB7XHJcbiAgICAgICAgICAgIHVybDogJy8nLFxyXG4gICAgICAgICAgICBwYXJlbnQ6ICdsYXlvdXQnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSG9tZUN0cmwnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2hvbWUvaG9tZS5jdHJsLmh0bWwnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyXHJcbiAgICAgICAgLndoZW4oJycsICcvJylcclxuICAgICAgICAub3RoZXJ3aXNlKCcvaG9tZScpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluUm91dGU7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gZmlsZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBhbmd1bGFyLXRlbXBsYXRlLWNhY2hlXG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG5jb25zdCB0ZW1wbGF0ZXNNb2R1bGUgPSBhbmd1bGFyXG5cdC5tb2R1bGUoJ3dpZGdldFByb2plY3QudGVtcGxhdGUnLCBbXSlcblx0LnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcblx0XHQkdGVtcGxhdGVDYWNoZS5wdXQoJ2hvbWUvaG9tZS5jdHJsLmh0bWwnLCAnPHA+V2VsY29tZTwvcD4nKTtcblxuXHRcdCR0ZW1wbGF0ZUNhY2hlLnB1dCgndGVtcGxhdGUvZm9vdGVyLmh0bWwnLCAnPGgxPkZvb3RlcjwvaDE+Jyk7XG5cblx0XHQkdGVtcGxhdGVDYWNoZS5wdXQoJ3RlbXBsYXRlL2hlYWRlci5odG1sJywgJzxoMT5IZWFkZXI8L2gxPicpO1xuXG5cdFx0JHRlbXBsYXRlQ2FjaGUucHV0KCd0ZW1wbGF0ZS90ZW1wbGF0ZS5odG1sJywgJzxoZWFkZXIgdWktdmlldz1cImhlYWRlclwiIGNsYXNzPVwiaGVhZGVyXCI+PC9oZWFkZXI+XFxuJyArXG5cdFx0XHQnPGRpdiB1aS12aWV3PVwiY29udGVudFwiPjwvZGl2PlxcbicgK1xuXHRcdFx0Jzxmb290ZXIgdWktdmlldz1cImZvb3RlclwiIGNsYXNzPVwiZm9vdGVyXCI+PC9mb290ZXI+Jyk7XG5cdH1cbl0pO1xuXG5leHBvcnQgZGVmYXVsdCB0ZW1wbGF0ZXNNb2R1bGU7XG4iXX0=
