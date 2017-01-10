const app = angular.module("TodoApp", []);



app.controller("TodoController",function($scope) {
  $scope.list = ["Boire", "Manger", "Dormir", "Rigoler"];
  $scope.title = "Ma todo list !";

  $scope.addItem = function (){
    $scope.list.push($scope.formItemText);
    $scope.formItemText = "";
  };

  $scope.supprItems = function(){
    $scope.list = [];
  };

  $scope.remove = function(index){
    $scope.list.splice(index, 1);
  };
})
