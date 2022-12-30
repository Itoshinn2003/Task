$(function(){


    $('input[type=checkbox]').change(function(){

        if($(this).prop('checked')){
            $('body').addClass("fix");
        }
        else{
            $('body').removeClass("fix");
        }
    })
});

$('.slider').slick({
    dots:true
})