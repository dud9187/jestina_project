$(function(){
    // 헤더 서브메뉴
    function header(){
    $("header nav .gnb_wrap > ul > li > a , header nav .gnb_wrap > ul > li > .sub_menu").mouseover(function(){
        $('header nav').css({"height" : "382px" , "background":"#fff"});
        $('header nav .gnb_wrap > ul > li > .sub_menu').css("height", "292px");
    })
    $("header nav .gnb_wrap > ul > li > a , header nav .gnb_wrap > ul > li > .sub_menu").mouseleave(function(){
        $('header nav').css({"height" : "90px", "background":"rgba(255, 255, 255, 0.1)"});
		$('header nav .gnb_wrap > ul > li > .sub_menu').css("height" , "0");
	});
    }
    header();    

    // 메인 배너
    var mainswiper = new Swiper(".bnSwiper", {
        autoplay :{
            delay : 1500,
            disableOnInteraction :false,
        },
        pagination: {
            el: ".bn_pagination",
            type: "fraction",
            clickable: true,
             formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2);
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    '<span class="' + totalClass + '"></span>';
            },
        },
        navigation: {
            nextEl: ".bn_next",
            prevEl: ".bn_prev",
        },
    });
    var pageswiper = new Swiper(".bnSwiper", {
        pagination: {
            el: ".bn_progress",
          type: "progressbar"
        },
    });

    mainswiper.controller.control = pageswiper; 

    // 스와이퍼 재생 정지 버튼
    $(".playpause").click(function(){
        if (mainswiper.autoplay.running) {
            // 스와이퍼 정지
            mainswiper.autoplay.stop();
            $(".play").css('display','block');
            $(".stop").css('display','none');
        } else {
            // 스와이퍼 재생
            mainswiper.autoplay.start();
            $(".play").css('display','none');
            $(".stop").css('display','block');
        }
    })






    // let str = $("#wrap #container.main .banner .bnSwiper .controll .bn_pagination").text();
	// let replaced_str = str.replace('/', '');

    // $("#wrap #container.main .banner .bnSwiper .controll .bn_pagination").text(replaced_str);

    
    // 스크롤탑
    
    $(".main .top_btn").click(function(){
        window.scrollTo({top : 0, behavior: 'smooth'}); 
    });
    
    $(window).scroll(function() {
        if($(window).scrollTop() > 90) {
            $('header nav').addClass('act');
        } else {
            $('header nav').removeClass('act');
        }
    
    });
})
