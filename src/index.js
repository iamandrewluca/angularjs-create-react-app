import angular from 'angular'
import 'angular-cookies'
import registerServiceWorker from './registerServiceWorker'
import MyAppComponent from './my-app/my-app.component'

angular
    .module('app', ['ngCookies'])
    .component('myApp', MyAppComponent);

angular.bootstrap(document, ['app']);
registerServiceWorker();
