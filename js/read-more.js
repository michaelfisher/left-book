$('#read-more-content').addClass('hide');

$('button#read-more-toggle').on('click', function() {
    $('#read-more-content').toggleClass('hide');
    $(this).html($(this).html() == "Less" ? "More" : "Less");
});