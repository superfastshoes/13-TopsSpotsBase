var app = angular.module('app', []);

//$scope go between javascript variables and HTML, giving the HTML access to
//those propertise
app.controller('SDTopSpots', function($scope, $http) {

    $http.get("http://localhost:60978/api/Spots")
        .then(function(response) {
            $scope.spot = response.data;
            console.log("nope");

            var mymap = L.map('mapid').setView([32.726008, -117.1655245], 12);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18,
                id: 'basulto93.130fejo7',
                accessToken: 'pk.eyJ1IjoiYmFzdWx0bzkzIiwiYSI6ImNpcm5saGY3cTA5c2xmbG04eXBseXJlNG8ifQ.PTCv5lO31gSM8B_eVEZ0sw'
            }).addTo(mymap);
            //Just another way to navigate to another page, adding ng-click="openGoogleMaps(spot) would make this work
            $scope.openGoogleMaps = function(spot) {
                window.location.replace('https://maps.google.com?q=' + spot.location[0] + ',' + spot.location[1]);
            };
        });
});
