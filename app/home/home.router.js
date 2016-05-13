function getStates (){
    return [{
        state:'home',
        config:{
            template: require('./home.template.html'),
            controller: 'HomeCtrl',
            controllerAs:'home',
            url:'/home'
        }
    }];
}

function homeRun (routerHelper){
    routerHelper.configureStates(getStates(),'home');
}

module.exports=angular.module('home',[]).run(['routerHelper', homeRun]);

