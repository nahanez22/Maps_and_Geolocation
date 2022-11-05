let marker, map;

function initMap() {
  // console.log("Inicializando mapa");
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  marker = new google.maps.Marker({
    position: posicion,
    map,
    title: "Initial position",
  });
  // Obtener la geolocalización
  // marker.setPosition({lat, lng});
  geoPosiciona();
}

function geoPosiciona() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation;
    const options = { timeout: 60000000 };
    const watchPos = geoLoc.watchPosition(centerMap, onError, options);
  } else {
    alert("Tu navegador no admite geolocalozación");
  }
}

function centerMap(position) {
  const newPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  console.log(newPos);
  marker.setPosition(newPos);
  map.setCenter(newPos);
}

function onError(error) {
  console.log(error);
}
