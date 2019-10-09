var showMore = showMore || {};

(function($, showMore) {

    "use strict";

    var page = 2,
        buttonId = "#btn_showMore",
        loading = "#loading",
        contentbody = ".content_body";

    showMore.load = function() {

        var url = "./" + page + ".html";

        $(buttonId).hide();
        $(loading).show();

        $.ajax({
            url: url,
            success: function(response) {
                if (!response || response.trim() == "NONE") {
                    $(buttonId).fadeOut();
                    $(loading).text("No more entries to load!");
                    return;
                }
                appendContests(response);
            },
            error: function(response) {
                $(loading).text("An error occurred with the request");
            }
        });
    };

    var appendContests = function(response) {
        var id = $(buttonId);

        $(buttonId).show();
        $(loading).hide();

        $(response).appendTo($(contentbody));
        page += 1;
    };

})(jQuery, showMore);