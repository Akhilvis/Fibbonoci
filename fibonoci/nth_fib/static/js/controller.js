var app = angular.module('FibApp', []);
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{$');
  $interpolateProvider.endSymbol('$}');
});
app.controller('fibControler', function($scope,$timeout) {
    console.log("controller..")
    $scope.countr=false;
    $scope.countdict={}
    $scope.countdict.count_no=0
    $scope.Aninatn=function(){
    	$('#btn1').addClass('btn-1');
    	$timeout(function(){
    	 $('#btn1').hide();
    	 $scope.countr=true;
    	 var myVar = setInterval(function(){ $scope.myTimer() }, 1000);
    	},500)

    }
$scope.myTimer=function() {
	console.log("mytimer....")
   $scope.countdict.count_no++;
   document.getElementById("counter").innerHTML = $scope.countdict.count_no;

}

$scope.myStopFunction=function() {
    clearInterval(myVar);
}


});
