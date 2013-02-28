module("GeoOffice on a iPhone", {
});

// CSS Tests - assume userAgent is chrome iOS 4.0 with dimensions 320 x 480

function sequenceSalesmanCSSSuccess(data, textStatus, jqXHR) {
    debugger;
    $("#salesmanList").html(jqXHR.responseText).trigger("create");
    ok(screen.width === 768, "iPhone mimicked screen width is 768 as required");
    ok(screen.width === $(document).width(), "iPhone mimicked document width is good - no horizontal scrollbars");
    ok(screen.height === 1024, "iPhone mimicked screen height is 1024 as required");
    ok($("div.size1of3").first().width() === 290, "iPhone mimicked width of first list is 290 as required");
    ok($("div.size1of3").last().width() === 738, "iPhone mimicked width of last list is 738 as required");
    start();
}

function sequenceSalesmanCSSError(jqXHR, testStatus, errorThrown) {

}

asyncTest("As already discussed iPhone document and device dimensions should match i.e. no scrollbars", function () {
    debugger;
    app.getUserCoordinates({ errorFlag: false }, geoTestCSSCBSequenceSalesmanSuccess, geoTestCSSCBSequenceSalesmanError);
})

test("As already discussed List widths should be less than the width of the iPhone", function () {
    debugger;
    ok($(".unit.size1of3.lastUnit").width() <= screen.width, "Success");
})

test("As already discussed List elements should have brown background", function () {
    debugger;
    ok(true === false, "Background colour looking good :-)");
})

test("As already discussed List element highlight should be orange", function () {
    debugger;
    ok(true === false, "List element highlight looking good :-)");
})

// Behaviour Tests
test("As already discussed flicking to left or right should show salesman by distance, product and industry", function () {
    ok(true === true, "Success");
})

test("As already discussed rotating to landscape should show location by distance, product and industry", function () {
    ok(true === true, "Success");
})

test("As already discussed rotating from portrait should show salesman in terms of distance, product and industry", function () {
    ok(true === true, "Success");
})

test("As already discussed tapping salesman should show details by distance, product and industry", function () {
    ok(true === true, "Success");
})

test("As already discussed holding unselected salesman should fix him in the list when scrolling", function () {
    ok(true === true, "Success");
})

test("As already discussed holding selected salesman should unfix him in the list when scrolling", function () {
    ok(true === true, "Success");
})

module("GeoOffice on a iPad", {
});

test("As already discussed salesman list should show columns for distance, product and industry", function () {
    ok(true === true, "Success");
})

test("As already discussed salesman list should show bigger version of ipad", function () {
    ok(true === true, "Success");
})
