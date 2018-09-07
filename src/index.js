import angular from 'angular'
import 'angular-cookies'
import registerServiceWorker from './registerServiceWorker'
/* eslint-disable-next-line */
import appTemplate from 'raw-loader!./my-app.html'

class MyController {
    constructor($cookies) {
        this.$cookies = $cookies
    }
    user = 'world';

    onClick() {
        this.$cookies.put('666', 666)
        window.alert(666)
    }
}
MyController.$inject = ['$cookies']

angular
    .module('app', ['ngCookies'])
    .component('myApp', {
        template: appTemplate,
        controller: ['$cookies', class {
            constructor($cookies) {
                this.$cookies = $cookies
            }
            user = 'world';
        
            onClick() {
                this.$cookies.put('666', 666)
                window.alert(666)
            }
        }]
    });

angular.bootstrap(document, ['app']);
registerServiceWorker();
