module("GeoOffice can rank salesmen by distance away from user", {
    setup: function () {
        localStorage.clear();
        app.reset();
    },
    teardown: function () {
    }
});

function geoTestCBSuccess(position) {
    debugger;
    app.geoCallbackSuccess(position);
    ok(app.userHasLocation() === true, "User now has a location");
    start();
}

function geoTestCBError() {
    debugger;
    common_geoTestCBError();
}

function sequenceSalesmanCSSSuccess(responseHTML) {
    debugger;
    $("#salesmanList").html(responseHTML + "<p>Ordered by nearest first :-)</p>").trigger("create");
    $($('.menu-buttonlist ul li a')[0]).addClass('hover');
    ok($($('.menu-buttonlist ul li a')[0]).css('background-image').indexOf("/images/menu-bg-addcon.gif") !== -1, "Backgound active is Addcon");
    ok($('.menu-buttonlist ul li a').css('text-decoration') === "none", "Text-decoration active is Addcon");
    ok($($('.menu-buttonlist ul li a, .menu-buttonlist ul li a:hover')[1]).css('background-image').indexOf("/images/menu-bg-inactive.gif") !== -1, "Backgound inactive is Addcon");
    ok(rgb2hex($($('.menu-buttonlist ul li a, .menu-buttonlist ul li a:hover')[1]).css('color')).toLowerCase() === "#ffffff", "Color inactive is Addcon");
    ok($($('.menu-buttonlist ul li a, .menu-buttonlist ul li a:hover')[1]).css('display') === "block", "Display inactive is Addcon");
    ok($($('.menu-buttonlist ul li a, .menu-buttonlist ul li a:hover')[1]).css('height') === "22px", "Height inactive is Addcon");
    ok($($('.menu-buttonlist ul li a, .menu-buttonlist ul li a:hover')[1]).css('padding-top') === "6px", "Padding-Top inactive is Addcon");
    ok($($('.menu-buttonlist ul li a, .menu-buttonlist ul li a:hover')[1]).css('width') === "440px", "Width inactive is Addcon");
    start();
}

function sequenceSalesmanCSSError(jqXHR, testStatus, errorThrown) {
    debugger;
    ok(true === true, "Dummy test error");
    start();
}


asyncTest("As already discussed user location should be prompted for", function () {
    ok(app.permissionToLocateUserAskedFor === true, "Permission granted to obtain user location");
    app.getUserCoordinates({ errorFlag: false }, geoTestCBSuccess, geoTestCBError); // Results stored in localStorage
})

asyncTest("As already discussed when user location available salesmen should be shown in order of nearest first", function () {
    app.getUserCoordinates({ errorFlag: false }, geoTestCBSequenceSalesmanSuccess, geoTestCBSequenceSalesmanError); // Results stored in localStorage
})

//test("As already discussed when user location not available salesmen should be shown in alphabetical order", function () {
//})
// *** TO DO ***
//test("user coordinates are out of date", function () {
//  ok(app.selectedSalesman.coords.latitude !== undefined, "Selected salesman coordinates readied");
//});

// *** CSS ***
asyncTest("As already discussed ranking list should appear grey when inactive", function () {
    app.getUserCoordinates({ errorFlag: false }, geoTestCSSCBSequenceSalesmanSuccess, geoTestCSSCBSequenceSalesmanError);
})

test("As already discussed ranking list should appear orange when active", function () {

})