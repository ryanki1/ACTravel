function wireupGeo() {
    $(document).live("pageshow", function (event, prevPage) {
        debugger;
        initGeoMap();
        initGeoPrompt();
    });
}

function log(message) {
    console.log ? console.log(message) : alert(message);
}


function drawMapOrRoute() {
    debugger;
    if (!localStorage.lat) {
        drawGeoMap();
    }
    else {
        drawGeoRoute();
    }
}

function drawGeoMap() {
    debugger;
    log(tut.maps.drawMap());
}

function drawGeoRoute() {
    debugger;
    log(tut.maps.drawRoute());
}

function geoCallback(position) {
    debugger;
    log("User location locked-on.");
    localStorage.lng = position.coords.longitude;
    localStorage.lat = position.coords.latitude;
    position.timestamp = new Date().getTime();
    localStorage.timestamp = position.timestamp;
    // Replacement for above 07.02.2013
    localStorage.travellingSalesman = "{\"user\": " + JSON.stringify(position) + "}";
    if ($.mobile && $.mobile.activePage) {
        var currentPage = $.mobile.activePage[0].Id;
    }
    if (currentPage == "salesmanCollectionPage") {
        showNearestFirst();
    }
    else if (currentPage == "salesmanDetailPage") {
        drawMapOrRoute();
    }
        
}

function geoErrorCallback(error) {
    //debugger;
    log("Error - User location not locked on.");
}

function initGeoPrompt()
{
    var timenow = new Date().getTime();
    var geoLocateTime = localStorage.timestamp == null ? 0 : localStorage.timestamp;
    debugger;
    if ((timenow - geoLocateTime) > 1) {
        if (navigator.geolocation) {
            //debugger;
            //if (!(localStorage.lng || localStorage.lat))
            navigator.geolocation.getCurrentPosition(geoCallback(), geoErrorCallback, {
                enableHighAccuracy: false,
                timeout: 120000,
                maximumAge: 1
            });
        }
    }            
}