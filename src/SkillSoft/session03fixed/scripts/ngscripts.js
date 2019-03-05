//let url = "http://localhost:8000/getweights";
let app = angular.module('SkillsApp', [] ); 
let url = "json.txt";
app.controller('Weights', function($scope, $http) {
	$http.get(url).then(function(response){
		 console.log(response.data);
		$scope.allWeights = response.data; 
	});
//
	$scope.frmSubmit = function(){
		 $http({
			method  : 'POST', 
			url     : url,            
			headers : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}, 
			data    : 'empName='+$scope.empName + '&empWeight='+$scope.empWeight  
		 }); 
	};
});