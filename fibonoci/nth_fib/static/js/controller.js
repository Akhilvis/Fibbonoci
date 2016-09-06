var app = angular.module('FibApp', []);

app.controller('fibControler', function($scope) {
    console.log("controller..")
    $scope.Aninatn=function(){
    	$('#btn1').addClass('btn-1');
    }
});
