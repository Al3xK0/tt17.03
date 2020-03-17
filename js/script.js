function clock() {
	var d = new Date();
	var month_num = d.getMonth()
	var day = d.getDate();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	 
	month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
	"июля", "августа", "сентября", "октября", "ноября", "декабря");
	 
	if (day <= 9) day = "0" + day;
	if (hours <= 9) hours = "0" + hours;
	if (minutes <= 9) minutes = "0" + minutes;
	if (seconds <= 9) seconds = "0" + seconds;
	 
	date_time = "Сегодня - " + day + " " + month[month_num] + " " + d.getFullYear() +
	" г.<br><br>Текущее время - "+ hours + ":" + minutes + ":" + seconds;
	if (document.layers) {
	 document.layers.doc_time.document.write(date_time);
	 document.layers.doc_time.document.close();
	}
	else document.getElementById("doc_time").innerHTML = date_time;
	 setTimeout("clock()", 1000);
	}


	function initMap() {
		var element = document.getElementById('maps');
		var options = {
			zoom: 5,
			center: {lat: 48.7558, lng: 30.6173}, 
		};

		var myMap = new google.maps.Map(element, options);

		var markers = [
			{
				coordinates: {lat: 50.449973, lng: 30.524911},
				info: '<h3>Киев</h3><br><img src="https://placehold.it/200x150"><br><p>Описание</p>'
			}
		];

		for(var i = 0; i < markers.length; i++) {
			addMarker(markers[i]);
		}

		function addMarker(properties) {
			var marker = new google.maps.Marker({
				position: properties.coordinates,
				map: myMap
			});

			if(properties.image) {
				marker.setIcon(properties.image);
			}

			if(properties.info) {
				var InfoWindow = new google.maps.InfoWindow({
					content: properties.info
				});

				marker.addListener('click', function(){
					InfoWindow.open(myMap, marker);
				});
			}
		}
		console.log(markers)
		document.getElementById(maps).value = latlng.lat();
		document.getElementById(maps).value = latlng.lng();
	}
	
	

	