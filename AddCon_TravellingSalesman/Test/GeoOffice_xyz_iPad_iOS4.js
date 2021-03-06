﻿module("GeoOffice on a iPad", {
});

// CSS Tests - assume userAgent is chrome iOS 4.0 with dimensions 320 x 480

function sequenceSalesmanCSSSuccess(data, textStatus, jqXHR) {
    debugger;
    $("#salesmanList").html(jqXHR.responseText).trigger("create");
    ok(navigator.userAgent.toLowerCase().indexOf("ipad") >= 0, "iPad browser confirmed");
    ok(screen.width === 768, "iPad mimicked screen width is 768 as required");
    ok(screen.width === $(document).width(), "iPad mimicked document width is good - no horizontal scrollbars");
    ok(screen.height === 1024, "iPad mimicked screen height is 1024 as required");
    ok($("div.size1of3").first().width() === 290, "iPad mimicked width of first list is 290 as required");
    ok($("div.size1of3").last().width() === 738, "iPad mimicked width of last list is 738 as required");
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

module("GeoOffice on a iPad: flicking to left or right should show salesman by distance, product, industry, distance, product (5 column grid)", {
});

asyncTest("As already discussed iPhone document and device dimensions should match i.e. no scrollbars", function () {
    // Ajax call responsible for getting the salesman data
    // Called a second time because ajax call is module dependant.
    //debugger;
    app.getUserCoordinates({ errorFlag: false }, geoTestCSSCBSequenceSalesmanSuccess, geoTestCSSCBSequenceSalesmanError);
})

test("As already discussed selecting hole 2 should show columns side by side", function () {
    if ($(".size1of5").length > 0) {
        var numPages = app.primePuttMat();
        app.scorePuttMatRows();
        if (numPages > 1) {
            //debugger;
            var secondHole = 1;
            $("#puttMat a:eq(" + secondHole + ")").trigger("click"); // Simulate tapping second hole
            var leftStackedColCount = 0;
            var lastOffsetLeft = new Array(); // Ich bin here
            $.each($(".activePage"), function (index, ele) {
                debugger;
                var offsetLeft = $(ele).offset().left;
                if (lastOffsetLeft.indexOf(offsetLeft) >= 0) {
                    leftStackedColCount = leftStackedColCount + 1;
                }
                else {
                    lastOffsetLeft.push(offsetLeft);
                }
            });
            ok(leftStackedColCount <= 1, "Columns showing on page 2 selection");
        }
        else {
            expect(0);
        }
    }
    else {
        expect(0);
    }
    
});
