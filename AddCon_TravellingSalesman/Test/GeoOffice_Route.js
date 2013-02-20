module("GeoOffice shows where our salesmen can be found", {
    setup: function () {
        localStorage.clear();
        app.reset();
    },
    teardown: function () {
    }
});

function GetReturnCode(retComment) {
    var ret = retComment.toLowerCase();
    switch (ret) {
        case "route drawn":
            retCode = app.geolocationReturnCodes.ROUTEDRAWN;
            break;
        case "your place was not found":
            retCode = app.geolocationReturnCodes.ROUTEPLACENOUTFOUND;
            break;
        case "zero results":
            retCode = app.geolocationReturnCodes.ROUTEZERORESULTS;
            break;
        case "an unknown error occurred.":
            retCode = app.geolocationReturnCodes.ROUTEUNKNOWNERRROR;
            break;
        case "map drawn":
            retCode = app.geolocationReturnCodes.MAPDRAWN;
            break;
        default:
            throw new Error("window.tut.maps.drawRoute() called from app.drawRoutePoints() returned an unexpected code, namely: " + ret);
            break;
    }
    return retCode;
}

function googleMapsReady() { // Callback called from Google map services - google object available
    debugger;
    var ret = app.googleMapsReady();
    debugger;
    ok(tut.maps.canvasElement, "Canvas ready");
    ok((tut.maps.map != undefined), "Map ready");
    ok(GetReturnCode(ret) === app.geolocationReturnCodes.ROUTEDRAWN, "Route drawn :-)");
    start();
}

function geoTestCBSuccess(position) {
    debugger;
    app.geoCallbackSuccess(position);
    // Test: permission to get user´s location not asked for
    app.permissionToLocateUserAskedFor = !app.userHasLocation();
    ok(app.permissionToLocateUserAskedFor === false, "No permission to ask for user location; location has already been stored");
    ok(app.userHasLocation(), "User now has a location")
    app.makeToySalesman(); // Results stored in app.selectedSalesman
    ok(app.selectedSalesman.coords.latitude !== undefined, "Selected salesman coordinates readied");
    window.tut.maps.initialize("googleMapsReady");
    window.tut.maps.map_canvas($(".mapsRoute div")[0]);
    app.setSalesmanOnRoute(app.selectedSalesman);
    start();
}

function geoTestCBError() {
    common_geoTestCBError();
}

test("we have a function for setting details for selected salesman", function () {
    ok((typeof (app.setSalesman) === 'function'), "Ready salesman function on standby");
});

test("coordinates of salesman stored", function () {
    app.makeToySalesman();
    ok(app.selectedSalesman.coords.latitude !== undefined, "Selected salesman coordinates readied");
});


// *** TO DO ***
//test("user coordinates are out of date", function () {
//});

test("permission to get user´s location asked for", function () {
    //debugger;
    ok(app.permissionToLocateUserAskedFor === true, "Permission granted to obtain user location");
});

asyncTest("salesman´s office put on the map", function () {
    //debugger;
    ok(app.getUserCoordinates({ errorFlag: true, important: true }) === app.geolocationReturnCodes.NOLOCKON, "Error - User location not locked on.");
    app.makeToySalesman(); // Results stored in app.selectedSalesman
    window.tut.maps.initialize("googleMapsReady");
    window.tut.maps.map_canvas($(".maps div")[0]);    
    app.setSalesmanOnRoute(app.selectedSalesman);
});

asyncTest("route drawn for salesman", function () {
    debugger;
    app.getUserCoordinates({ errorFlag: false }, geoTestCBSuccess, geoTestCBError); // Results stored in localStorage
});