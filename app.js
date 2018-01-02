function ReservationsViewModel() {
    var me = this;
    me.mainObject = ko.observable();
    me.crushInjuryPlaces = ko.observable();
    me.roadWorks = ko.observable();
    me.crushInjuryPlaceDetails = ko.observable();
    me.roadWorkDetails = ko.observable();
    
    me.setCrushInjuryDetails = function (details) {
        me.crushInjuryPlaceDetails(details);
    }

    me.setRoadWorkDetails = function (details) {
        me.roadWorkDetails(details);
    }

    $.get("/data/mainObject.json", me.mainObject);
}

var model = new ReservationsViewModel();

ko.applyBindings(model);

$(document).ready(function () {
    $('#collapseOne').on('show.bs.collapse', function () {
        $.get("/data/crushInjuryPlaces.json", function(data) {
            model.crushInjuryPlaces(data);
            if (data && data.length) {
                model.crushInjuryPlaceDetails(data[0]);
            }
        });
    });
    $('#collapseOne').on('hidden.bs.collapse', function () {
        model.crushInjuryPlaces(null);
        model.crushInjuryPlaceDetails(null);
    });
    $('#collapseTwo').on('show.bs.collapse', function () {
        $.get("/data/roadWorks.json", function(data) {
            model.roadWorks(data);
            if (data && data.length) {
                model.roadWorkDetails(data[0]);
            }
        });
    });
    $('#collapseTwo').on('hidden.bs.collapse', function () {
        model.roadWorks(null);
        model.roadWorkDetails(null);
    });
});