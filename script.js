$(document).ready(function(){
    $('img').click(function(){
        var cat = $(this).attr('src');
        $(this).attr('src', $(this).attr('alt-src'));
        $(this).attr('alt-src', (cat));
    });
})