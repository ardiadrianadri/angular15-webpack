function HomeController (){
    var mv = this;
    
    this.msg = "HelloWorld"
}

module.exports = angular.module('home').controller('HomeCtrl',HomeController);