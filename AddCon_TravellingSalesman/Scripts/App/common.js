function geoAllowLocateUser(position) {
    //debugger;
    log("User location locked-on.");
    if (position) {
        localStorage.lng = position.coords.longitude;
        localStorage.lat = position.coords.latitude;
        position.timestamp = new Date().getTime();
        localStorage.timestamp = position.timestamp;
        // Replacement for above 07.02.2013
        localStorage.travellingSalesman = "{\"user\": " + JSON.stringify(position) + "}";
    }
    app.setUserFromLocalStorage();
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" +
     ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2);
}