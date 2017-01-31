'use strict';

import HeaderCtrl from './header.ctrl';
import FooterCtrl from './footer.ctrl';

const templateModule = angular
    .module('widgetProject.template', [])
    .controller('HeaderCtrl', HeaderCtrl)
    .controller('FooterCtrl', FooterCtrl);

export default templateModule;