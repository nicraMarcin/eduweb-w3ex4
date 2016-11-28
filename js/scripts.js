(function() {

var app = angular.module("formApp", []);

app.controller("FormController", ["$scope", "$log", "$timeout", function($scope, $log, $timeout) {
	
	$scope.user = {};

	$scope.rules = function() {
		$scope.rulesState = $scope.user.accept ? "Zaakceptowano" : "Nie zaakceptowano";
	};

	function clearForm() {
		$scope.user = {};
		$scope.registerForm.$setPristine();
		$scope.registerForm.$setUntouched();
	}

	$scope.register = function() {
		$scope.formLoading = true;
		$timeout(function() {
			$scope.success = true;
			clearForm();
			$scope.formLoading = false;
			$scope.rulesState = null;
		}, 2000);
	};
	

}]);

})();