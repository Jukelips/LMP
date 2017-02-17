// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


//.controller("CollecteurCtrl", function($scope)
//{
//	//alert("test");
//});
//


.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
      
    .state('home', {
    url:'/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })
  .state('collecteurs', {
    url:'/collecteurs',
    templateUrl: 'templates/collecteurs.html',
    controller:'CollecteurCtrl'
  })
  .state('donneurs', {
    url:'/donneurs',
    templateUrl: 'templates/donneurs.html',
    //controller: 'LoginCtrl'
  })
  .state('particuliers', {
    url:'/particuliers',
    templateUrl: 'templates/particuliers.html'
  })
  .state('formCollecteurs', {
    url:'/formCollecteurs',
    templateUrl: 'templates/formCollecteurs.html'
  })
  .state('formRestaurants', {
    url:'/formRestaurants',
    templateUrl: 'templates/formRestaurants.html'
  })
  .state('inscription', {
    url:'/inscription',
    templateUrl: 'templates/inscription.html',
    controller: 'InscriptionCtrl'
  })
  .state('indexDonneurs', {
    url:'/indexDonneurs',
    templateUrl: 'templates/indexDonneurs.html',
  })
  .state('formCommerce', {
    url:'/formCommerce',
    templateUrl: 'templates/formCommerce.html',
  })
  .state('formCafe', {
    url:'/formCafe',
    templateUrl: 'templates/formCafe.html',
  })
  .state('map', {
    url: '/',
    templateUrl: 'templates/map.html',
    controller: 'MapCtrl'
  })
  .state('formParticuliers', {
    url:'/formParticuliers',
    templateUrl: 'templates/form/formParticuliers.html',
  })
  .state('descRestaurant', {
    url:'/descRestaurant',
    templateUrl: 'templates/form/descRestaurant.html',
  })
  $urlRouterProvider.otherwise('/home')
})

.controller("HomeCtrl", function(){})
.controller("CollecteurCtrl", function(){})
.controller("InscriptionCtrl", function(){})
//.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {})

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
    
  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    //Valeur a retourné pour la position selon les paramètres
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    //var myLatLng = {lat: -25.363, lng: 131.044};
    
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions)
    
    $scope.marker = new google.maps.Marker({
    position: latLng,
    map: $scope.map
  })

 
  }, function(error){
    console.log("Could not get location");
  })
})

//
//.controller('LoginCtrl', function($scope, $state, $ionicPopup, AuthService) {
//  $scope.data = {};
// 
//  $scope.login = function(data) {
//    AuthService.login(data.email, data.password).then(function(authenticated) {
//      $state.go('indexDonneurs', {}, {reload: true});
//      $scope.setCurrentUsername(data.email);
//    }, function(err) {
//      var alertPopup = $ionicPopup.alert({
//        title: 'Login failed!',
//        template: 'Please check your credentials!'
//      })
//    })
//  }
//})

