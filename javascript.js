var showMore = showMore || {};

(function($, showMore) {
    var page = 2,
        btn_showMore = "#btn_showMore",
        loading = "#loading",
        content_body = ".content_body";
    showMore.load = function() {
        var url = "/" + page + ".html";
        $(btn_showMore).hide();
        $(loading).show();
        $.ajax({
            url: url,
            success: function(response) {
                if (!response || response.trim() == "NONE") {
                    $(btn_showMore).fadeOut();
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
        var id = $(btn_showMore);

        $(btn_showMore).show();
        $(loading).hide();

        $(response).appendTo($(content_body));
        page += 1;
    };

})(jQuery, showMore);