"use strict";

angular.module("musicControllers", ["door3.css"])

.controller("jukeboxController", ["$scope", "$css", function($scope, $css){
	var vm = this;

	vm.songArray = [
		{
			"songName": "Intestinal Fortitude",
			"songPath": "static/music/intestinal-fortitude.mp3"
		},
		{
			"songName": "Offensive Song Title",
			"songPath": "static/music/offensive-song-title.mp3"
		}
	];

	vm.chosenSong = vm.songArray[0];

	vm.song = new Audio(vm.chosenSong.songPath);

	vm.songPlaying = false;

	vm.playSong = function() {
		vm.song.play();
		vm.songPlaying = true;
	}

	vm.pauseSong = function() {
		vm.song.pause();
		vm.songPlaying = false;
	}
}]);