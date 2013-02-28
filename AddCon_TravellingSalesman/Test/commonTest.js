// Chunks of behaviour common to Route and NearestSalesman 

function common_geoTestCBError() {
    debugger;
    ok(false === false, "Error - Unable to acquire user coordinates - using mock user location data instead");
    // Here we use Mock data
    app.getUserCoordinates({ errorFlag: true }, geoTestCBSuccess, geoTestCBError); // Results stored in localStorage
}

function sequenceSalesmanSuccess(data, textStatus, jqXHR) {
    debugger;
    ok(data[0].LastName.toLowerCase() === "weinfurtner", "Nearest identified");
    ok(data[1].LastName.toLowerCase() === "rensing", "2nd nearest identified");
    ok(data[2].LastName.toLowerCase() === "joachim-knak", "3rd nearest identified");
    ok(data[3].LastName.toLowerCase() === "fischer", "Furthest identified");
    ok(data[3].Distance !== "undefined", "Distance in km available");
    start();
}

function sequenceSalesmanError(jqXHR, testStatus, errorThrown) {
    debugger;
    ok(true === true, "Dummy test error");
    start();
}

function geoTestCBSequenceSalesmanSuccess(position) {
    debugger;
    app.geoRankingCallbackSuccess(position);
    ok(app.userHasLocation() === true, "User now has a location");
    app.showNearestFirstJSON(sequenceSalesmanSuccess, sequenceSalesmanError);
}

function geoTestCBSequenceSalesmanError() {
    ok(true === true, "Dummy TestCBSequenceSalesmanError");
    start();
}

function geoTestCSSCBSequenceSalesmanSuccess(position) {
    debugger;
    app.geoRankingCallbackSuccess(position);
    ok(app.userHasLocation() === true, "User now has a location");
    app.showNearestFirst(sequenceSalesmanCSSSuccess, sequenceSalesmanCSSError);
}

function geoTestCSSCBSequenceSalesmanError() {
    ok(true === true, "Dummy TestCBSequenceSalesmanError");
    start();
}


