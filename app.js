function ReservationsViewModel() {
    var me = this;
    me.mainObject = ko.observable();
    me.crushInjuryPlaces = ko.observable();
    me.roadWorks = ko.observable();

    $.get("/data/mainObject.json", me.mainObject);
}

var model = new ReservationsViewModel();

ko.applyBindings(model);

$(document).ready(function () {
    $('#collapseOne').on('show.bs.collapse', function () {
        $.get("/data/crushInjuryPlaces.json", model.crushInjuryPlaces);
    });
    $('#collapseOne').on('hidden.bs.collapse', function () {
        model.crushInjuryPlaces(null);
    });
    $('#collapseTwo').on('show.bs.collapse', function () {
        $.get("/data/roadWorks.json", model.roadWorks);
    });
    $('#collapseTwo').on('hidden.bs.collapse', function () {
        model.roadWorks(null);
    });
});