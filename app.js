function ReservationsViewModel() {
    var me = this;
    me.data = ko.observable();
    
    

    $.get("http://postgres.cutewallet.ru/workers.json", me.data);

    me.substr = function(str) {
        if (!str) {
            return '';
        }

        if (str.length > 10) {
            return str.substring(0, 10);
        }

        return str;
    }

    me.timestamp = function (unix_timestamp) {
        return new Date(unix_timestamp).toLocaleString();
    }
}

var model = new ReservationsViewModel();

ko.applyBindings(model);
