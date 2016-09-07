var app = angular.module('FibApp', []);
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{$');
  $interpolateProvider.endSymbol('$}');
});


app.controller('fibControler', function($scope,$timeout,$http) {
    console.log("controller..")
    $scope.countdict={}
    $scope.countdict.count_no=0
    $scope.val=""
    $scope.nth_term=""
    $scope.alert=""
    $scope.rslt_stat=false
    $scope.Aninatn=function(){
    	
    }
  $scope.send=function(){
  	if($scope.val>0&&$scope.val!=undefined){

  	    	$scope.myVar = setInterval(function(){ $scope.myTimer() }, 1);
  	    	$scope.alert=""
  	    	console.log($scope.val)
 			$http({
                    method  : 'POST',
                    url     : 'nth_term/',
                    data    : {"n":$scope.val}, // pass in data as strings
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'} // set the headers so angular passing info as form data (not request payload)
                    }).success(function(data) {

                    	$scope.nth_term=data['N']
                    	if(isFinite($scope.nth_term))
                    	{
                    	$scope.myStopFunction()
    		        	$('#btn1').addClass('btn-1');
				    	$timeout(function(){
				    	 $('#btn1').hide();
				    	 $('#txtbox').hide();
				    	},0)
                    	$timeout(function(){
                    	$scope.rslt_stat=true
                    	},500)
                		console.log("myStopFunction...")
                    	}
                    	else{
                    		$scope.alert="Result is too big to display!"
                    		$scope.retry()
                    	}
                    })
  }
 	  else if($scope.val<0){$scope.alert="Please enter positive values!"}
  	  else {$scope.alert="Please enter a value!"}

}
$scope.myTimer=function() {
   ++$scope.countdict.count_no;
}

$scope.myStopFunction=function() {
    clearInterval($scope.myVar);
}
$scope.retry=function(){
	$scope.rslt_stat=false
	$scope.val=""
    $scope.nth_term=""
    $scope.countdict.count_no=0
    $('#btn1').show();
 	$('#txtbox').show();
}

});
