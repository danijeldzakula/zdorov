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
//	переключатель цен
    var country_list = new Object();
        country_list['RU'] = {s1: '990', 
                                 s2: '330', 
                                 s3: '1320', 
                                 s4: '1980', 
                                 curr: 'руб.',
                                 specialfields : {
                                     }                                        
                                 };
        country_list['BY'] = {s1: '327000', 
                                 s2: '654999', 
                                 s3: '1320', 
                                 s4: '654000', 
                                 curr: 'руб.',
                                 specialfields : {
                                     }                                        
                                 };
        country_list['MD'] = {s1: '350', 
                                 s2: '600', 
                                 s3: '500', 
                                 s4: '700', 
                                 curr: 'лей.',
                                 specialfields : {
                                     }                                        
                                 };
        country_list['UA'] = {s1: '540', 
                                 s2: '180', 
                                 s3: '720', 
                                 s4: '1080', 
                                 curr: 'грн.',
                                 specialfields : {
                                     }                                        
                                 };
        country_list['KZ'] = {s1: '5800', 
                                 s2: '1900', 
                                 s3: '7700', 
                                 s4: '11600', 
                                 curr: 'тенге',
                                 specialfields : {
                                     }                                        
                                 };
        country_list['AZ'] = {s1: '25', 
                                 s2: '7', 
                                 s3: '32', 
                                 s4: '50', 
                                 curr: 'манат',
                                 specialfields : {
                                     }                                        
                                 };
        function change_country(id)
    {
        $('.price_land_s1').text(country_list[id].s1);  
        $('.price_land_s2').text(country_list[id].s2);  
        $('.price_land_s3').text(country_list[id].s3);  
        $('.price_land_s4').text(country_list[id].s4);  
        $('.price_land_curr').text(country_list[id].curr);  
        $('.price_field_s1').val(country_list[id].s1);  
        $('.price_field_s2').val(country_list[id].s2);  
        $('.price_field_s3').val(country_list[id].s3);
        for(var i in country_list[id].specialfields)
        {
            $('.additional_fields_' + i).html(country_list[id].specialfields[i]);    
        }  
    }
    
    $(function(){
      $('.country_select').change(function(){
        change_country($(this).val());
        $('.country_select').val($(this).val());
      });
      change_country('RU');  
    }); 
