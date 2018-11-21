function ReservationsViewModel() {
    var me = this;
    me.data = ko.observable();

    var url = "https://api.nanopool.org/v1/xmr/user/4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbS21WH2cfawSGCNupk7";

    $.ajax({
            url: url,
            type: "GET",
            crossDomain: true,
            dataType: "json",
            success: function (response) {
                me.data(response.data);
            },
            error: function (xhr, status) {
                location.reload();
            }
        });
}

var model = new ReservationsViewModel();

ko.applyBindings(model);
