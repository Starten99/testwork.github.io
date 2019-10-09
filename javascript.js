var lazyload = lazyload || {};

(function($, lazyload) {

    "use strict";

    var page = 2,
        buttonId = "#btn_showMore",
        loadingId = "#loading-div",
        container = ".content_body";

    lazyload.load = function() {

        var url = "./" + page + ".html";

        $(buttonId).hide();
        $(loadingId).show();

        $.ajax({
            url: url,
            success: function(response) {
                if (!response || response.trim() == "NONE") {
                    $(buttonId).fadeOut();
                    $(loadingId).text("No more entries to load!");
                    return;
                }
                appendContests(response);
            },
            error: function(response) {
                $(loadingId).text("Sorry, there was some error with the request. Please refresh the page.");
            }
        });
    };

    var appendContests = function(response) {
        var id = $(buttonId);

        $(buttonId).show();
        $(loadingId).hide();

        $(response).appendTo($(container));
        page += 1;
    };

})(jQuery, lazyload);