require(['jquery', 'handlebars'], function($, handlebars) {
    $.ajax({
        url: '/api/data',
        dataType: 'json',
        success: function(res) {
            console.log(res);
            var data = $('#data').html();
            var template = handlebars.compile(data);
            var html = template(res);
            $('.wrap').html(html);
        },
        error: function(error) {
            console.log(error);
        }
    })
})