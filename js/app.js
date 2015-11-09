// Create app
angular.module('myApp', ['ui.router'])
// Configure app

// Config route provider
.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'templates/Landing.html',
            controller: 'HomeController',
        })
        // Configure states for "content" and "about"
        .state('content', {
            url:'/content',
            templateUrl: 'templates/content.html',
            controller: 'ContentController',
        })
        .state('about', {
            url:'/about',
            templateUrl: 'templates/about.html',
            controller: 'AboutController',
        })
    })


// Landing page controller: define $scope.number as a number
.controller('HomeController', function($scope){
  $scope.number = 6
})

// About page controller: define $scope.about as a string
.controller('AboutController', function($scope){
  $scope.info = "About"
})

// Content controller: define $scope.url as an image
.controller('ContentController', function($scope){
  $scope.url = "http://41.media.tumblr.com/tumblr_m4abln1YPn1qzecyno1_500.jpg"
})

