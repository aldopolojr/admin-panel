$(document).ready(function(){
    $(".close-toggle").click(function(){
        $(this).parents(".block-box").toggleClass("close");
    });
});