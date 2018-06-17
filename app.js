var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
	console.log("in controller...");
	$scope.newUser = {};
	$scope.info = "";

	$scope.users = [
		{username: "rimon", fullName: "Rashid Rimon", email:"rimonmath@gmail.com",gender:"Male", phone: "911100000", village:"Hyderabad"},
		{username: "ramesh", fullName: "Ramesh", email:"shamim@gmail.com",gender:"Male", phone: "922200000", village:"Cyberabad"},
		{username: "tamim", fullName: "Tamim Iqbal", email:"tamim@gmail.com",gender:"Male", phone: "933300000", village:"Adilabad"},
		{username: "radha", fullName: "Radha", email:"radha@gmail.com",gender:"Female", phone: "944400000", village:"Medchal"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"},
		{username: "abc", fullName: "ABC", email:"abc@gmail.com",gender:"ABC", phone: "900000000", village:"ABC"}
	];

	$scope.saveUser = function(){
		console.log("Saving...");
		$scope.users.push($scope.newUser);
		$scope.info = "New User Added Successfully!";
		$scope.newUser = {};
	};

	$scope.selectUser = function(user){
		$scope.clickedUser = user;
	};

	$scope.deleteUser = function(){
		console.log($scope.users.indexOf($scope.clickedUser));
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
		$scope.info = "User Deleted Successfully!";
	};

	$scope.clearInfo = function(){
		$scope.info = "";
	};
});