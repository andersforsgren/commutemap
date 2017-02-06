jQuery(document).ready(function () {     
    var centerPosition = new google.maps.LatLng(59.329344, 18.057764);
    var options = {
        zoom: 11,
        center: centerPosition,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map($('#map')[0], options);
          
    var imageMapType = new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {                       
            return ['Tiles/', zoom, '/commutemap_z', zoom, '_x', coord.x, '_y', coord.y, '.png'].join('');
        },
        tileSize: new google.maps.Size(256, 256)
    });

    map.overlayMapTypes.push(imageMapType);
       
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('legend'));
});

