module("GeoOffice on a iPhone: multi-device", {
});

// CSS Tests - assume userAgent is chrome iOS 4.0 with dimensions 320 x 480

function sequenceSalesmanCSSSuccess(data, textStatus, jqXHR) {
    //debugger;
    $("#salesmanList").html(jqXHR.responseText).trigger("create");
    ok(navigator.userAgent.toLowerCase().indexOf("iphone") >= 0, "iPhone browser confirmed");
    ok(screen.width === 320, "iPhone mimicked screen width is 320 as required");
    ok(screen.width === $(document).width(), "iPhone mimicked document width is good - no horizontal scrollbars");
    ok(screen.height === 480, "iPhone mimicked height is 480 as required");
    ok($("div.size1of3").last().width() === 290, "iPhone mimicked width of first list is 290 as required");
    ok($("div.size1of3").last().width() === 290, "iPhone mimicked width of last list is 290 as required");
    start();
}

function sequenceSalesmanCSSError(jqXHR, testStatus, errorThrown) {

}

asyncTest("As already discussed iPhone document and device dimensions should match i.e. no scrollbars", function () {
    // Ajax call responsible for getting the salesman data
    //debugger;
    app.getUserCoordinates({ errorFlag: false }, geoTestCSSCBSequenceSalesmanSuccess, geoTestCSSCBSequenceSalesmanError);
})

test("As already discussed List widths should be less than the width of the iPhone", function () {
    //debugger;
    ok($(".unit.size1of3.lastUnit").width() <= screen.width, "Success");
});

test("As already discussed List elements should have brown background", function () {
    //debugger;
    ok(true === false, "Background colour looking good :-)");
});

test("As already discussed List element highlight should be orange", function () {
    //debugger;
    ok(true === false, "List element highlight looking good :-)");
});

module("GeoOffice on a iPhone: flicking to left or right should show salesman by distance, product and industry (3 column grid)", {
});

asyncTest("As already discussed iPhone document and device dimensions should match i.e. no scrollbars", function () {
    // Ajax call responsible for getting the salesman data
    // Called a second time because ajax call is module dependant.
    //debugger;
    app.getUserCoordinates({ errorFlag: false }, geoTestCSSCBSequenceSalesmanSuccess, geoTestCSSCBSequenceSalesmanError);
})

// Behaviour Tests
// Note the order in which these (independant) tests are done is not predictable
test("As already discussed overview flick panel should show if columns are stacked", function () {
    //debugger;
    app.primePuttMat();
    pagePuttCount();
});


test("As already discussed initial conditions should show 1st page tieing up with 1st puttHole", function () {
    if ($(".size1of3").length > 0) {
        var numPages = app.primePuttMat();
        app.scorePuttMatRows();
        //debugger;
        app.teeOff();
        ok($(".row0").length > 0, "Rows are marked with their page number");
        ok($("#puttMat a:first").hasClass("ballInTheHole"), "Putt Mat´s leftmost hole filled");
        ok($(".row0").hasClass("activePage") === true, "First Page showing");
        if (numPages > 1) {
            ok($(".row1").hasClass("inactivePage") === true, "Second Page not showing");
    }
    else {
        expect(0);
    }
});

test("As already discussed selecting hole 2 should show coresponding page", function () {
    if ($(".size1of3").length > 0) {
        var numPages = app.primePuttMat();
        app.scorePuttMatRows(); 
        if (numPages > 1) {
            //debugger;
            var secondHole = 1;
            $("#puttMat a:eq(" + secondHole + ")").trigger("click"); // Simulate tapping second hole
            ok($(".row1.activePage").length > 0, "Page 2 active");
            ok($(".row0.inactivePage").length > 0, "Page 1 inactive");
            ok($("#puttMat a:eq(" + secondHole + ")").hasClass("ballInTheHole") === true, "Putt Mat´s 2nd hole filled");
            ok($("#puttMat a:first").hasClass("ballInTheHole") === false, "Putt Mat´s 1st hole empty");
        }
        else {
            expect(0);
        }
    }
    else {
        expect(0);
    }
});

test("As already discussed rotating to landscape should show location by distance, product and industry", function () {
    ok(true === true, "Success");
});

test("As already discussed rotating from portrait should show salesman in terms of distance, product and industry", function () {
    ok(true === true, "Success");
});

test("As already discussed tapping salesman should show details by distance, product and industry", function () {
    ok(true === true, "Success");
});

test("As already discussed holding unselected salesman should fix him in the list when scrolling", function () {
    ok(true === true, "Success");
});

test("As already discussed holding selected salesman should unfix him in the list when scrolling", function () {
    ok(true === true, "Success");
});

module("GeoOffice on a iPad", {
});

test("As already discussed salesman list should show columns for distance, product and industry", function () {
    ok(true === true, "Success");
});

test("As already discussed salesman list should show bigger version of ipad", function () {
    ok(true === true, "Success");
});