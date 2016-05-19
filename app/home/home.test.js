describe('Controller test example', function(){
    var $rootScope, controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$rootScope_, _$controller_) {
        var $controller = _$controller_;
        $rootScope = _$rootScope_;
        
        controller = function () {
            return $controller('HomeCtrl',{});
        }
    }));
    
    it('Test OK: Probamos que el controlador tiene el atributo msg', function(){
        var ctrl = controller();
        expect(ctrl.msg).toBe('HelloWorld');
    });
});