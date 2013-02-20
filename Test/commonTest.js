// Chunks of behaviour common to Route and NearestSalesman 

function common_geoTestCBError() {
    debugger;
    ok(false === false, "Error - Unable to acquire user coordinates - using mock user location data instead");
    // Here we use Mock data
    app.getUserCoordinates({ errorFlag: true }, geoTestCBSuccess, geoTestCBError); // Results stored in localStorage
}