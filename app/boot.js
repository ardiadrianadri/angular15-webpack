/*require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/css/bootstrap-theme.css');
require('jquery');
require('bootstrap/dist/js/bootstrap.js');*/
require('../bower_components/platform.js/platform');
require('angular');
require('../bower_components/angular-bind-polymer/angular_bind_polymer');
require('angular-ui-router');
require('./routerHelperProvider');
require('./home/home.router');
require('./home/home.ctrl');

var app = require('./app');

angular.element(document).ready(function () {
    angular.bootstrap(document,[app.name])
});