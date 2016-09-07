var app = angular.module('FibApp', []);
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{$');
  $interpolateProvider.endSymbol('$}');
});


app.controller('fibControler', function($scope,$timeout,$http) {
    console.log("controller..")
    $scope.countr=false;
    $scope.countdict={}
    $scope.countdict.count_no=0
    $scope.val=""
    $scope.nth_term=""
    $scope.Aninatn=function(){
    	$('#btn1').addClass('btn-1');
    	$timeout(function(){
    	 $('#btn1').hide();
    	 $scope.countr=true;
    	},500)

    }
  $scope.send=function(){
  	    	$scope.myVar = setInterval(function(){ $scope.myTimer() }, 1000);
 			$http({
                    method  : 'POST',
                    url     : 'nth_term/',
                    data    : {"n":$scope.val}, // pass in data as strings
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'} // set the headers so angular passing info as form data (not request payload)
                    }).success(function(data) {
                    	$scope.nth_term=data['N']
                		console.log("myStopFunction...")
                    	$scope.myStopFunction()
                    })
  }
$scope.myTimer=function() {
	console.log("mytimer....")
   $scope.countdict.count_no++;
   document.getElementById("counter").innerHTML = $scope.countdict.count_no;

}

$scope.myStopFunction=function() {
    clearInterval($scope.myVar);
}


});
