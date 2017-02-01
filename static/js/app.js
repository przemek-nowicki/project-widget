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
function HomeCtrl() {
    console.log("Welcome in the main controller!");
}

exports.default = HomeCtrl;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
                     value: true
});

var _home = require('./home.ctrl');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var homeModule = angular.module('widgetProject.home', []).controller('HomeCtrl', _home2.default);

exports.default = homeModule;

},{"./home.ctrl":5}],7:[function(require,module,exports){
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
	$templateCache.put('home/home.ctrl.html', 'Home content');

	$templateCache.put('template/footer.html', '<h1>Footer</h1>');

	$templateCache.put('template/header.html', '<h1>Header</h1>');

	$templateCache.put('template/template.html', '<header ui-view="header" class="header"></header>\n' + '<div ui-view="content"></div>\n' + '<footer ui-view="footer" class="footer"></footer>');
}]);exports.default = templatesModule;

},{"angular":"angular"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyIsInNyY1xcY29uc3RhbnRzXFxhcGkuY29uc3RhbnRzLmpzIiwic3JjXFxjb25zdGFudHNcXGluZGV4LmpzIiwic3JjXFxjb25zdGFudHNcXHN0YXRlLmNvbnN0bmF0cy5qcyIsInNyY1xcaG9tZVxcaG9tZS5jdHJsLmpzIiwic3JjXFxob21lXFxpbmRleC5qcyIsInNyY1xccm91dGVcXGluZGV4LmpzIiwic3JjXFxyb3V0ZVxcbGF5b3V0LnJvdXRlLmpzIiwic3JjXFxyb3V0ZVxcbWFpbi5yb3V0ZS5qcyIsInNyY1xcdGVtcGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQTs7SUFBWSxPOztBQUVaOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsUUFDSyxNQURMLENBQ1ksZUFEWixFQUM2QixDQUNyQix5QkFEcUIsRUFFckIscUJBRnFCLEVBR3JCLHdCQUhxQixFQUlyQixvQkFKcUIsQ0FEN0I7O0FBUUEsUUFBUSxTQUFSLENBQWtCLFFBQWxCLEVBQTRCLENBQUMsZUFBRCxDQUE1Qjs7O0FDbkJBOzs7OztrQkFFZTtBQUNYLFNBQUs7QUFETSxDOzs7QUNGZjs7Ozs7O0FBRUE7O0lBQVksTzs7QUFFWjs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sa0JBQWtCLFFBQ25CLE1BRG1CLENBQ1oseUJBRFksRUFDZSxFQURmLEVBRW5CLFFBRm1CLENBRVYsS0FGVSxpQkFHbkIsUUFIbUIsQ0FHVixPQUhVLDJCQUF4Qjs7a0JBS2UsZTs7O0FDWmY7Ozs7O2tCQUVlO0FBQ1gsVUFBTSxNQURLO0FBRVgsWUFBUSxRQUZHO0FBR1gsVUFBTTtBQUhLLEM7OztBQ0ZmOzs7OztBQUVBLFNBQVMsUUFBVCxHQUFvQjtBQUNoQixZQUFRLEdBQVIsQ0FBWSxpQ0FBWjtBQUNIOztrQkFFYyxROzs7QUNOZjs7Ozs7O0FBRUE7Ozs7OztBQUVBLElBQU0sYUFBYSxRQUNHLE1BREgsQ0FDVSxvQkFEVixFQUNnQyxFQURoQyxFQUVHLFVBRkgsQ0FFYyxVQUZkLGlCQUFuQjs7a0JBSWUsVTs7O0FDUmY7Ozs7OztBQUVBOztJQUFZLE87O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLGVBQWUsUUFDaEIsTUFEZ0IsQ0FDVCxxQkFEUyxFQUNjLENBQUMsV0FBRCxDQURkLEVBRWhCLE1BRmdCLG1CQUdoQixNQUhnQixpQkFJaEIsTUFKZ0IsQ0FJVCxVQUFTLGlCQUFULEVBQTRCO0FBQ2hDLHNCQUFrQixTQUFsQixDQUE0QixJQUE1QjtBQUNILENBTmdCLENBQXJCOztrQkFRZSxZOzs7QUNkZjs7Ozs7QUFFQSxTQUFTLFdBQVQsQ0FBcUIsY0FBckIsRUFBcUM7QUFDcEMsZ0JBQ0UsS0FERixDQUNRLFVBRFIsRUFDb0I7QUFDbEIsWUFBVSxJQURRO0FBRWxCLGVBQWE7QUFGSyxFQURwQixFQUtFLEtBTEYsQ0FLUSxRQUxSLEVBS2tCO0FBQ2hCLFVBQVEsVUFEUTtBQUVoQixZQUFVLElBRk07QUFHaEIsU0FBTztBQUNOLGFBQVU7QUFDVCxpQkFBYSxzQkFESjtBQUVULGdCQUFZO0FBRkgsSUFESjtBQUtOLGNBQVc7QUFDVixjQUFVO0FBREEsSUFMTDtBQVFOLGFBQVU7QUFDVCxpQkFBYSxzQkFESjtBQUVULGdCQUFZO0FBRkg7QUFSSjtBQUhTLEVBTGxCO0FBc0JBOztrQkFFYyxXOzs7QUMzQmY7Ozs7O0FBRUEsU0FBUyxTQUFULENBQW1CLGNBQW5CLEVBQW1DLGtCQUFuQyxFQUF1RCxLQUF2RCxFQUE4RDtBQUMxRCxtQkFDSyxLQURMLENBQ1csTUFBTSxJQURqQixFQUN1QjtBQUNmLGFBQUssR0FEVTtBQUVmLGdCQUFRLFFBRk87QUFHZixvQkFBWSxVQUhHO0FBSWYscUJBQWE7QUFKRSxLQUR2Qjs7QUFRQSx1QkFDSyxJQURMLENBQ1UsRUFEVixFQUNjLEdBRGQsRUFFSyxTQUZMLENBRWUsT0FGZjtBQUdIOztrQkFFYyxTOzs7QUNoQmY7O0FBRUE7Ozs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNLGtCQUFrQixrQkFDdEIsTUFEc0IsQ0FDZix3QkFEZSxFQUNXLEVBRFgsRUFFdEIsR0FGc0IsQ0FFbEIsQ0FBQyxnQkFBRCxFQUFtQixVQUFTLGNBQVQsRUFBeUI7QUFDaEQsZ0JBQWUsR0FBZixDQUFtQixxQkFBbkIsRUFBMEMsY0FBMUM7O0FBRUEsZ0JBQWUsR0FBZixDQUFtQixzQkFBbkIsRUFBMkMsaUJBQTNDOztBQUVBLGdCQUFlLEdBQWYsQ0FBbUIsc0JBQW5CLEVBQTJDLGlCQUEzQzs7QUFFQSxnQkFBZSxHQUFmLENBQW1CLHdCQUFuQixFQUE2Qyx3REFDNUMsaUNBRDRDLEdBRTVDLG1EQUZEO0FBR0EsQ0FWSSxDQUZrQixDQUF4QixDLGtCQWVlLGUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuXHJcbmltcG9ydCAnYW5ndWxhci11aS1yb3V0ZXInO1xyXG5cclxuaW1wb3J0ICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCAnLi9yb3V0ZSc7XHJcbmltcG9ydCAnLi9ob21lJztcclxuaW1wb3J0ICcuL3RlbXBsYXRlJ1xyXG5cclxuYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnd2lkZ2V0UHJvamVjdCcsIFtcclxuICAgICAgICAnd2lkZ2V0UHJvamVjdC5jb25zdGFudHMnLFxyXG4gICAgICAgICd3aWRnZXRQcm9qZWN0LnJvdXRlJyxcclxuICAgICAgICAnd2lkZ2V0UHJvamVjdC50ZW1wbGF0ZScsXHJcbiAgICAgICAgJ3dpZGdldFByb2plY3QuaG9tZSdcclxuICAgIF0pO1xyXG5cclxuYW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsnd2lkZ2V0UHJvamVjdCddKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgVVJMOiAnL2FwaSdcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuXHJcbmltcG9ydCBBUEkgZnJvbSAnLi9hcGkuY29uc3RhbnRzJztcclxuaW1wb3J0IFNUQVRFIGZyb20gJy4vc3RhdGUuY29uc3RuYXRzLmpzJztcclxuXHJcbmNvbnN0IGNvbnN0YW50c01vZHVsZSA9IGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3dpZGdldFByb2plY3QuY29uc3RhbnRzJywgW10pXHJcbiAgICAuY29uc3RhbnQoJ0FQSScsIEFQSSlcclxuICAgIC5jb25zdGFudCgnU1RBVEUnLCBTVEFURSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25zdGFudHNNb2R1bGU7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgUk9PVDogJ3Jvb3QnLFxyXG4gICAgUEFSRU5UOiAncGFyZW50JyxcclxuICAgIEhPTUU6ICdob21lJ1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBIb21lQ3RybCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiV2VsY29tZSBpbiB0aGUgbWFpbiBjb250cm9sbGVyIVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUN0cmw7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBIb21lQ3RybCBmcm9tICcuL2hvbWUuY3RybCc7XHJcblxyXG5jb25zdCBob21lTW9kdWxlID0gYW5ndWxhclxyXG4gICAgICAgICAgICAgICAgICAgICAubW9kdWxlKCd3aWRnZXRQcm9qZWN0LmhvbWUnLCBbXSlcclxuICAgICAgICAgICAgICAgICAgICAgLmNvbnRyb2xsZXIoJ0hvbWVDdHJsJywgSG9tZUN0cmwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZU1vZHVsZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IExheW91dFJvdXRlIGZyb20gJy4vbGF5b3V0LnJvdXRlJztcclxuaW1wb3J0IE1haW5Sb3V0ZSBmcm9tICcuL21haW4ucm91dGUnO1xyXG5cclxuY29uc3Qgcm91dGVyTW9kdWxlID0gYW5ndWxhclxyXG4gICAgLm1vZHVsZSgnd2lkZ2V0UHJvamVjdC5yb3V0ZScsIFsndWkucm91dGVyJ10pXHJcbiAgICAuY29uZmlnKExheW91dFJvdXRlKVxyXG4gICAgLmNvbmZpZyhNYWluUm91dGUpXHJcbiAgICAuY29uZmlnKGZ1bmN0aW9uKCRsb2NhdGlvblByb3ZpZGVyKSB7XHJcbiAgICAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xyXG4gICAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJNb2R1bGU7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0Um91dGUoJHN0YXRlUHJvdmlkZXIpIHtcclxuXHQkc3RhdGVQcm92aWRlclxyXG5cdFx0LnN0YXRlKCd0ZW1wbGF0ZScsIHtcclxuXHRcdFx0YWJzdHJhY3Q6IHRydWUsXHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvdGVtcGxhdGUuaHRtbCdcclxuXHRcdH0pXHJcblx0XHQuc3RhdGUoJ2xheW91dCcsIHtcclxuXHRcdFx0cGFyZW50OiAndGVtcGxhdGUnLFxyXG5cdFx0XHRhYnN0cmFjdDogdHJ1ZSxcclxuXHRcdFx0dmlld3M6IHtcclxuXHRcdFx0XHQnaGVhZGVyJzoge1xyXG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9oZWFkZXIuaHRtbCcsXHJcblx0XHRcdFx0XHRjb250cm9sbGVyOiAnSGVhZGVyQ3RybCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdjb250ZW50Jzoge1xyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXc+PC9kaXY+J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J2Zvb3Rlcic6IHtcclxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvZm9vdGVyLmh0bWwnLFxyXG5cdFx0XHRcdFx0Y29udHJvbGxlcjogJ0Zvb3RlckN0cmwnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRSb3V0ZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gTWFpblJvdXRlKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsIFNUQVRFKSB7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIC5zdGF0ZShTVEFURS5IT01FLCB7XHJcbiAgICAgICAgICAgIHVybDogJy8nLFxyXG4gICAgICAgICAgICBwYXJlbnQ6ICdsYXlvdXQnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSG9tZUN0cmwnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2hvbWUvaG9tZS5jdHJsLmh0bWwnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyXHJcbiAgICAgICAgLndoZW4oJycsICcvJylcclxuICAgICAgICAub3RoZXJ3aXNlKCcvaG9tZScpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluUm91dGU7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gZmlsZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBhbmd1bGFyLXRlbXBsYXRlLWNhY2hlXG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG5jb25zdCB0ZW1wbGF0ZXNNb2R1bGUgPSBhbmd1bGFyXG5cdC5tb2R1bGUoJ3dpZGdldFByb2plY3QudGVtcGxhdGUnLCBbXSlcblx0LnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHtcblx0XHQkdGVtcGxhdGVDYWNoZS5wdXQoJ2hvbWUvaG9tZS5jdHJsLmh0bWwnLCAnSG9tZSBjb250ZW50Jyk7XG5cblx0XHQkdGVtcGxhdGVDYWNoZS5wdXQoJ3RlbXBsYXRlL2Zvb3Rlci5odG1sJywgJzxoMT5Gb290ZXI8L2gxPicpO1xuXG5cdFx0JHRlbXBsYXRlQ2FjaGUucHV0KCd0ZW1wbGF0ZS9oZWFkZXIuaHRtbCcsICc8aDE+SGVhZGVyPC9oMT4nKTtcblxuXHRcdCR0ZW1wbGF0ZUNhY2hlLnB1dCgndGVtcGxhdGUvdGVtcGxhdGUuaHRtbCcsICc8aGVhZGVyIHVpLXZpZXc9XCJoZWFkZXJcIiBjbGFzcz1cImhlYWRlclwiPjwvaGVhZGVyPlxcbicgK1xuXHRcdFx0JzxkaXYgdWktdmlldz1cImNvbnRlbnRcIj48L2Rpdj5cXG4nICtcblx0XHRcdCc8Zm9vdGVyIHVpLXZpZXc9XCJmb290ZXJcIiBjbGFzcz1cImZvb3RlclwiPjwvZm9vdGVyPicpO1xuXHR9XG5dKTtcblxuZXhwb3J0IGRlZmF1bHQgdGVtcGxhdGVzTW9kdWxlO1xuIl19
