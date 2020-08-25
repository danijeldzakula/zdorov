$(function() {

        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
		 //    —лайдер
    var sliderML = 0;
    $('.slider_wrap').css('margin-left', sliderML);
    var maxsliderML = 630;
    var minsliderML = -630;

    $('.fa-angle-left').click(function () {
        if (sliderML !== maxsliderML) {
            sliderML = sliderML + 630;
            $('.slider_wrap').animate({'margin-left': sliderML});
        } else{
            sliderML = sliderML - 1260;
            $('.slider_wrap').animate({'margin-left': sliderML});
        }
    });

    $('.fa-angle-right').click(function () {
        if (sliderML !== minsliderML) {
            sliderML = sliderML - 630;
            $('.slider_wrap').animate({'margin-left': sliderML});
        } else{
            sliderML = sliderML + 1260;
            $('.slider_wrap').animate({'margin-left': sliderML});
        }
    });

    $('.fa-angle-right,.fa-angle-left').click(function () {
        if (sliderML === 630) {
            $('.slide').eq(0).addClass('vid');
            $('.slide').eq(1).removeClass('vid');
            $('.slide').eq(2).removeClass('vid');
        }
        if (sliderML === 0) {
            $('.slide').eq(1).addClass('vid');
            $('.slide').eq(0).removeClass('vid');
            $('.slide').eq(2).removeClass('vid');
        }
        if (sliderML === -630) {
            $('.slide').eq(2).addClass('vid');
            $('.slide').eq(0).removeClass('vid');
            $('.slide').eq(1).removeClass('vid');
        }
    });

//    јудиоплеер
    $('.audio1 i').click(function () {
        if ($(this).hasClass('fa-play-circle')) {
            $(this).removeClass('fa-play-circle');
            $(this).addClass('fa-pause');
            $(this).siblings('p').children('span.name').css('color', '#0098a7');
            $(this).siblings('audio').get(0).play();
        } else {
            $(this).removeClass('fa-pause');
            $(this).addClass('fa-play-circle');
            $(this).siblings('p').children('span.name').css('color', '#000');
            $(this).siblings('audio').get(0).pause();
        }
    });
	 $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
            $('body').removeClass('loading');
        }
    });
});