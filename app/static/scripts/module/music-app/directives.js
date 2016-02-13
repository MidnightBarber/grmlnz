"use strict";

angular.module("musicDirectives", [])

.directive("jukebox", [function(){
	return {
		restrict: "E",
		scope: {

		},
		templateUrl: "static/scripts/module/music-app/partials/jukebox.html",
		controller: "jukeboxController",
		controllerAs: "jukebox",
		link: function(scope, element, attrs) {
			var audioPlayer = angular.element(scope.jukebox.song);
			audioPlayer.on("ended", function(){
				scope.jukebox.songPlaying = false;
				scope.$apply();
			});
		}
	}
}]);

