var app = angular.module('mainApp', []);

var mainController = app.controller('mainController', function(animalFactory, $scope) {
  $scope.animal = animalFactory.getRandomAnimal();
});

var animalFactory = app.factory('animalFactory', function() {
  var factory = {};
  factory.getRandomAnimal = function() {
    var animals = ['Dog', 'Cat', 'Frog', 'Lion', 'Zebra', 'Goat', 'Llama', 'Penguin', 'Parrot', 'Tiger'];
    return animals[Math.floor(Math.random()*animals.length)];
  };

  return factory;
});
