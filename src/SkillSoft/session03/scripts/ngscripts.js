let app = angular.module("SkillsApp", [])
let url = "http://localhost:8000/getweights"
app.controller("Weights", function($scope, $http){
    $http.get(url).then(function(response){
        console.log(response)
    })
})