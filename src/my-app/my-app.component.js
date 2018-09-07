import appTemplate from 'raw-loader!./my-app.html' // eslint-disable-line

class MyAppController {
    constructor($cookies) {
        this.$cookies = $cookies
        this.user = 'world';
    }

    onClick() {
        this.$cookies.put('666', 666)
        window.alert(this.user)
    }
}
MyAppController.$inject = ['$cookies']

export default {
    template: appTemplate,
    controller: ['$cookies', MyAppController]
}