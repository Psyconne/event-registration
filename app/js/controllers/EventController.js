'use strict';

eventsApp.controller('EventController', 
	function EventController($scope) {
	    $scope.event = {
		name: 'Angular Boot Camp',
		date: '1/1/2016',
		time: '10:20 am',
		location: {
		    address: 'Google Headquarters',
		    city: 'Magic City',
		    province: 'LA'
		},
		imageURL: '/img/angularjs-logo.png',
		sessions: [
		{
		    name: 'Directives MasterClass',
		    creatorName: 'Bob Dave',
		    duration: '1 hr',
		    level: 'Advanced',
		    abstract: 'In this session you will learn the ins and outs of directives!',

		    upVoteCount: 0
		},
		{
		    name: 'Scope for fun and profit',
		    creatorName: 'John Smith',
		    duration: '1 hr 40min',
		    level: 'Intermediate',
		    abstract: 'The turn of scopes, this course is a little challenging but fun to do!',

		    upVoteCount: 0
		},
		{
		    name: 'Well behaved Controllers',
		    creatorName: 'Laura Ginger',
		    duration: '3 hrs',
		    level: 'Expert',
		    abstract: 'Last but not least writing and setting up a controller Youpi!',
		    upVoteCount: 0

		}]
	    } 
	    $scope.upVoteSession = function(session) {
		session.upVoteCount++;
	    };
	    $scope.downVoteSession = function(session) {
		session.upVoteCount--;
	    };
	});
