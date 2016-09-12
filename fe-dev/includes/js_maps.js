// Footer map
google.maps.event.addDomListener(window, 'load', init);

function init() {
	var markerList = [];
	$('.fg-mapMarker').each(function(){
		var ilat = Number($(this).data('lat'));
		var ilng = Number($(this).data('lng'));
		var myLatLng = new google.maps.LatLng(ilat, ilng);
		var pinIcono = $(this).data('pin') || 'media/fg-pin1.png';
		var contenido = $(this).html();
		var disItem = {
			latitude: ilat, 
			longitude: ilng, 
			content:  contenido,
			thePin: { url:pinIcono, size: new google.maps.Size(30,45), anchor: new google.maps.Point(14, 42) }
		};
		markerList.push(disItem);
	});

	var maincoors = [markerList[0].latitude, markerList[0].longitude] || [4.664237, -74.047979];

	var mapOptions = {
		zoom: 16,
		zoomControl: true,
		scrollwheel: false,
		streetViewControl: false,
		mapTypeControl: false,
		scaleControl: false,
		draggable:true,
		center: new google.maps.LatLng(maincoors[0], maincoors[1]),
	};
	var mapElement = document.getElementById('gmap'), map = new google.maps.Map(mapElement, mapOptions);

	var br_point = [], infowindow_content = [], infowindow = new InfoBox({ alignBottom: true, infoBoxClearance: new google.maps.Size(10,10), pixelOffset: new google.maps.Size(-108, -42) });

	$.each(markerList, function (i){
		infowindow_content[i] = markerList[i].content;
		br_point[i] = new google.maps.Marker({ position: new google.maps.LatLng(markerList[i].latitude, markerList[i].longitude), map: map, icon: markerList[i].thePin });
		br_point[i].addListener('click', function() { infowindow.setContent(infowindow_content[i]); infowindow.open(map, this); });
	});

}