'use strict';

import * as angular from 'angular';

import SessionService from './session.service';

const securityModule = angular
    .module('widgetProject.security', [])
    .service('sessionService', SessionService);

export default securityModule;