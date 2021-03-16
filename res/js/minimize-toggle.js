$(document).ready(function(){
    $(".minimize-toggle").click(function(){
        $(this).parents(".block-box").children(".content").toggleClass("minimize");
        $(this).children(".icon").toggleClass("icon-minus");
        $(this).children(".icon").toggleClass("icon-plus");
    });
});