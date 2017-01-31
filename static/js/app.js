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

},{"./constants":3,"./home":6,"./route":7,"./template":12,"angular":"angular","angular-ui-router":"angular-ui-router"}],2:[function(require,module,exports){
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

Object.defineProperty(exports, "__esModule", {
    value: true
});
function FooterCtrl() {
    console.log("footer!");
}

exports.default = FooterCtrl;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function HeaderCtrl() {
    console.log("header!");
}

exports.default = HeaderCtrl;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _header = require('./header.ctrl');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./footer.ctrl');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateModule = angular.module('widgetProject.template', []).controller('HeaderCtrl', _header2.default).controller('FooterCtrl', _footer2.default);

exports.default = templateModule;

},{"./footer.ctrl":10,"./header.ctrl":11}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyIsInNyY1xcY29uc3RhbnRzXFxhcGkuY29uc3RhbnRzLmpzIiwic3JjXFxjb25zdGFudHNcXGluZGV4LmpzIiwic3JjXFxjb25zdGFudHNcXHN0YXRlLmNvbnN0bmF0cy5qcyIsInNyY1xcaG9tZVxcaG9tZS5jdHJsLmpzIiwic3JjXFxob21lXFxpbmRleC5qcyIsInNyY1xccm91dGVcXGluZGV4LmpzIiwic3JjXFxyb3V0ZVxcbGF5b3V0LnJvdXRlLmpzIiwic3JjXFxyb3V0ZVxcbWFpbi5yb3V0ZS5qcyIsInNyY1xcdGVtcGxhdGVcXGZvb3Rlci5jdHJsLmpzIiwic3JjXFx0ZW1wbGF0ZVxcaGVhZGVyLmN0cmwuanMiLCJzcmNcXHRlbXBsYXRlXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBOztJQUFZLE87O0FBRVo7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxRQUNLLE1BREwsQ0FDWSxlQURaLEVBQzZCLENBQ3JCLHlCQURxQixFQUVyQixxQkFGcUIsRUFHckIsd0JBSHFCLEVBSXJCLG9CQUpxQixDQUQ3Qjs7QUFRQSxRQUFRLFNBQVIsQ0FBa0IsUUFBbEIsRUFBNEIsQ0FBQyxlQUFELENBQTVCOzs7QUNuQkE7Ozs7O2tCQUVlO0FBQ1gsU0FBSztBQURNLEM7OztBQ0ZmOzs7Ozs7QUFFQTs7SUFBWSxPOztBQUVaOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTSxrQkFBa0IsUUFDbkIsTUFEbUIsQ0FDWix5QkFEWSxFQUNlLEVBRGYsRUFFbkIsUUFGbUIsQ0FFVixLQUZVLGlCQUduQixRQUhtQixDQUdWLE9BSFUsMkJBQXhCOztrQkFLZSxlOzs7QUNaZjs7Ozs7a0JBRWU7QUFDWCxVQUFNLE1BREs7QUFFWCxZQUFRLFFBRkc7QUFHWCxVQUFNO0FBSEssQzs7O0FDRmY7Ozs7O0FBRUEsU0FBUyxRQUFULEdBQW9CO0FBQ2hCLFlBQVEsR0FBUixDQUFZLGlDQUFaO0FBQ0g7O2tCQUVjLFE7OztBQ05mOzs7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTSxhQUFhLFFBQ0csTUFESCxDQUNVLG9CQURWLEVBQ2dDLEVBRGhDLEVBRUcsVUFGSCxDQUVjLFVBRmQsaUJBQW5COztrQkFJZSxVOzs7QUNSZjs7Ozs7O0FBRUE7O0lBQVksTzs7QUFDWjs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sZUFBZSxRQUNoQixNQURnQixDQUNULHFCQURTLEVBQ2MsQ0FBQyxXQUFELENBRGQsRUFFaEIsTUFGZ0IsbUJBR2hCLE1BSGdCLGlCQUloQixNQUpnQixDQUlULFVBQVMsaUJBQVQsRUFBNEI7QUFDaEMsc0JBQWtCLFNBQWxCLENBQTRCLElBQTVCO0FBQ0gsQ0FOZ0IsQ0FBckI7O2tCQVFlLFk7OztBQ2RmOzs7OztBQUVBLFNBQVMsV0FBVCxDQUFxQixjQUFyQixFQUFxQztBQUNwQyxnQkFDRSxLQURGLENBQ1EsVUFEUixFQUNvQjtBQUNsQixZQUFVLElBRFE7QUFFbEIsZUFBYTtBQUZLLEVBRHBCLEVBS0UsS0FMRixDQUtRLFFBTFIsRUFLa0I7QUFDaEIsVUFBUSxVQURRO0FBRWhCLFlBQVUsSUFGTTtBQUdoQixTQUFPO0FBQ04sYUFBVTtBQUNULGlCQUFhLHNCQURKO0FBRVQsZ0JBQVk7QUFGSCxJQURKO0FBS04sY0FBVztBQUNWLGNBQVU7QUFEQSxJQUxMO0FBUU4sYUFBVTtBQUNULGlCQUFhLHNCQURKO0FBRVQsZ0JBQVk7QUFGSDtBQVJKO0FBSFMsRUFMbEI7QUFzQkE7O2tCQUVjLFc7OztBQzNCZjs7Ozs7QUFFQSxTQUFTLFNBQVQsQ0FBbUIsY0FBbkIsRUFBbUMsa0JBQW5DLEVBQXVELEtBQXZELEVBQThEO0FBQzFELG1CQUNLLEtBREwsQ0FDVyxNQUFNLElBRGpCLEVBQ3VCO0FBQ2YsYUFBSyxHQURVO0FBRWYsZ0JBQVEsUUFGTztBQUdmLG9CQUFZLFVBSEc7QUFJZixxQkFBYTtBQUpFLEtBRHZCOztBQVFBLHVCQUNLLElBREwsQ0FDVSxFQURWLEVBQ2MsR0FEZCxFQUVLLFNBRkwsQ0FFZSxPQUZmO0FBR0g7O2tCQUVjLFM7OztBQ2hCZjs7Ozs7QUFFQSxTQUFTLFVBQVQsR0FBc0I7QUFDbEIsWUFBUSxHQUFSLENBQVksU0FBWjtBQUNIOztrQkFFYyxVOzs7QUNOZjs7Ozs7QUFFQSxTQUFTLFVBQVQsR0FBc0I7QUFDbEIsWUFBUSxHQUFSLENBQVksU0FBWjtBQUNIOztrQkFFYyxVOzs7QUNOZjs7Ozs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxpQkFBaUIsUUFDbEIsTUFEa0IsQ0FDWCx3QkFEVyxFQUNlLEVBRGYsRUFFbEIsVUFGa0IsQ0FFUCxZQUZPLG9CQUdsQixVQUhrQixDQUdQLFlBSE8sbUJBQXZCOztrQkFLZSxjIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgJ2FuZ3VsYXItdWktcm91dGVyJztcclxuXHJcbmltcG9ydCAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgJy4vcm91dGUnO1xyXG5pbXBvcnQgJy4vaG9tZSc7XHJcbmltcG9ydCAnLi90ZW1wbGF0ZSdcclxuXHJcbmFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3dpZGdldFByb2plY3QnLCBbXHJcbiAgICAgICAgJ3dpZGdldFByb2plY3QuY29uc3RhbnRzJyxcclxuICAgICAgICAnd2lkZ2V0UHJvamVjdC5yb3V0ZScsXHJcbiAgICAgICAgJ3dpZGdldFByb2plY3QudGVtcGxhdGUnLFxyXG4gICAgICAgICd3aWRnZXRQcm9qZWN0LmhvbWUnXHJcbiAgICBdKTtcclxuXHJcbmFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LCBbJ3dpZGdldFByb2plY3QnXSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFVSTDogJy9hcGknXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgQVBJIGZyb20gJy4vYXBpLmNvbnN0YW50cyc7XHJcbmltcG9ydCBTVEFURSBmcm9tICcuL3N0YXRlLmNvbnN0bmF0cy5qcyc7XHJcblxyXG5jb25zdCBjb25zdGFudHNNb2R1bGUgPSBhbmd1bGFyXHJcbiAgICAubW9kdWxlKCd3aWRnZXRQcm9qZWN0LmNvbnN0YW50cycsIFtdKVxyXG4gICAgLmNvbnN0YW50KCdBUEknLCBBUEkpXHJcbiAgICAuY29uc3RhbnQoJ1NUQVRFJywgU1RBVEUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uc3RhbnRzTW9kdWxlOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFJPT1Q6ICdyb290JyxcclxuICAgIFBBUkVOVDogJ3BhcmVudCcsXHJcbiAgICBIT01FOiAnaG9tZSdcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gSG9tZUN0cmwoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIldlbGNvbWUgaW4gdGhlIG1haW4gY29udHJvbGxlciFcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVDdHJsO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgSG9tZUN0cmwgZnJvbSAnLi9ob21lLmN0cmwnO1xyXG5cclxuY29uc3QgaG9tZU1vZHVsZSA9IGFuZ3VsYXJcclxuICAgICAgICAgICAgICAgICAgICAgLm1vZHVsZSgnd2lkZ2V0UHJvamVjdC5ob21lJywgW10pXHJcbiAgICAgICAgICAgICAgICAgICAgIC5jb250cm9sbGVyKCdIb21lQ3RybCcsIEhvbWVDdHJsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVNb2R1bGU7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCBMYXlvdXRSb3V0ZSBmcm9tICcuL2xheW91dC5yb3V0ZSc7XHJcbmltcG9ydCBNYWluUm91dGUgZnJvbSAnLi9tYWluLnJvdXRlJztcclxuXHJcbmNvbnN0IHJvdXRlck1vZHVsZSA9IGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3dpZGdldFByb2plY3Qucm91dGUnLCBbJ3VpLnJvdXRlciddKVxyXG4gICAgLmNvbmZpZyhMYXlvdXRSb3V0ZSlcclxuICAgIC5jb25maWcoTWFpblJvdXRlKVxyXG4gICAgLmNvbmZpZyhmdW5jdGlvbigkbG9jYXRpb25Qcm92aWRlcikge1xyXG4gICAgICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcclxuICAgIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyTW9kdWxlOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIExheW91dFJvdXRlKCRzdGF0ZVByb3ZpZGVyKSB7XHJcblx0JHN0YXRlUHJvdmlkZXJcclxuXHRcdC5zdGF0ZSgndGVtcGxhdGUnLCB7XHJcblx0XHRcdGFic3RyYWN0OiB0cnVlLFxyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL3RlbXBsYXRlLmh0bWwnXHJcblx0XHR9KVxyXG5cdFx0LnN0YXRlKCdsYXlvdXQnLCB7XHJcblx0XHRcdHBhcmVudDogJ3RlbXBsYXRlJyxcclxuXHRcdFx0YWJzdHJhY3Q6IHRydWUsXHJcblx0XHRcdHZpZXdzOiB7XHJcblx0XHRcdFx0J2hlYWRlcic6IHtcclxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaGVhZGVyLmh0bWwnLFxyXG5cdFx0XHRcdFx0Y29udHJvbGxlcjogJ0hlYWRlckN0cmwnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnY29udGVudCc6IHtcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3PjwvZGl2PidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdmb290ZXInOiB7XHJcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2Zvb3Rlci5odG1sJyxcclxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdGb290ZXJDdHJsJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Um91dGU7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIE1haW5Sb3V0ZSgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCBTVEFURSkge1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAuc3RhdGUoU1RBVEUuSE9NRSwge1xyXG4gICAgICAgICAgICB1cmw6ICcvJyxcclxuICAgICAgICAgICAgcGFyZW50OiAnbGF5b3V0JyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0hvbWVDdHJsJyxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdob21lL2hvbWUuY3RybC5odG1sJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICR1cmxSb3V0ZXJQcm92aWRlclxyXG4gICAgICAgIC53aGVuKCcnLCAnLycpXHJcbiAgICAgICAgLm90aGVyd2lzZSgnL2hvbWUnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblJvdXRlO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBGb290ZXJDdHJsKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJmb290ZXIhXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJDdHJsO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXJDdHJsKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJoZWFkZXIhXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDdHJsO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgSGVhZGVyQ3RybCBmcm9tICcuL2hlYWRlci5jdHJsJztcclxuaW1wb3J0IEZvb3RlckN0cmwgZnJvbSAnLi9mb290ZXIuY3RybCc7XHJcblxyXG5jb25zdCB0ZW1wbGF0ZU1vZHVsZSA9IGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ3dpZGdldFByb2plY3QudGVtcGxhdGUnLCBbXSlcclxuICAgIC5jb250cm9sbGVyKCdIZWFkZXJDdHJsJywgSGVhZGVyQ3RybClcclxuICAgIC5jb250cm9sbGVyKCdGb290ZXJDdHJsJywgRm9vdGVyQ3RybCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZW1wbGF0ZU1vZHVsZTsiXX0=
