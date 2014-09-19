$(document).ready(function(){
    initializeGoogleMap();
})

function initializeGoogleMap() {
    var centerLatlng = new google.maps.LatLng(41.079522, 29.011544);
    var markerLatlng = new google.maps.LatLng(40.769522, 29.221544);


    var mapOptions = {
        zoom: 8,
        center: centerLatlng,
        mapTypeId: google.maps.MapTypeId.STREET,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        draggable: true,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        scrollwheel: false
    }
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var image = {
        url: 'images/map-marker.png',
        size: new google.maps.Size(75, 75)
    };

    var marker = new google.maps.Marker({
        position: markerLatlng,
        map: map,
        title:"Hello World!",
        icon: image
    });

    var styles = [
                    {
                        stylers: [
                                      { hue: "#4e4f5d" },
                                      { saturation: -90 },
                                      { lightness: 50 },
                                      { contrast: 100 },
                                      { gamma: 1 }
                                 ]
                    }
                ];

    map.setOptions({ styles: styles });
    google.maps.event.trigger(map, 'resize');
}