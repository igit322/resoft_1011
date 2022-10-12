$(window).load(function() {
    $('#load').hide();
  });

$(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('#gon').addClass('active');
            const logo = document.querySelector('.logo img');
            logo.src = "./img/toco-common/logo-Resoft.svg"
            const ham = document.querySelector('.ham img');
            ham.src = "./img/toco-common/company_N_busines_N_yard-menu.svg";
            $("#header").css('background',"white");
            $(".dpdl").css('color',"black");
        }else{
            if($('.so').hasClass('close')){
                $('#gon').removeClass('active');
                const logo = document.querySelector('.logo img');
                logo.src = "./img/toco-common/logo-Resoft-white.png"
                const ham = document.querySelector('.ham img');
                ham.src = "./img/toco-img1/icon-menu.svg"
                $(".dpdl").css('color',"white");
                $("#header").css('background',"transparent");
            }
        }
    });

$(document).ready(function(){
    
    //  네비바 햄버거
    $('.ham').click(function() {
        if($('.so').hasClass('more'))
        {
            $('.so').addClass('magictime fadeOut');
            setTimeout(function() { $('.so').addClass('close').removeClass('more');}, 500);
            if($(window).scrollTop()==0){
                $('#gon').removeClass('active');
                const logo = document.querySelector('.logo img');
                logo.src = "./img/toco-common/logo-Resoft-white.png"
                const ham = document.querySelector('.ham img');
                ham.src = "./img/toco-img1/icon-menu.svg"
                $(".dpdl").css('color',"white");
                $("#header").css('background',"transparent");
            }
        }
        else if($('.so').hasClass('close'))
        {
            $('.so').removeClass('magictime fadeOut');
            $('.so').addClass('magictime fadeIn');
            $('.so').addClass('more').removeClass('close');
            $('#gon').addClass('active');
            const logo = document.querySelector('.logo img');
            logo.src = "./img/toco-common/logo-Resoft.svg"
            const ham = document.querySelector('.ham img');
            ham.src = "./img/toco-common/company_N_busines_N_yard-menu.svg"
            $("#header").css('background',"white");
            $(".dpdl").css('color',"black");
        }
    });
    
    $('.slick-header-wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover:true,
        arrows: true,
        infinite:true,
        speed: 500,
        prevArrow: $('#prev-arrow'),
        nextArrow: $('#next-arrow')
    });
    // 슬릭 멈추고 재생할 때 CSS랑 기능
    $("#stop-btn").click(function(){
        $('.slick-header-wrap').slick('slickPause');
        $(this).css("display","none");
        $("#play-btn").css("display","block");
        });
    $("#play-btn").click(function(){
        $('.slick-header-wrap').slick('slickPlay')
        $(this).css("display","none");
        $("#stop-btn").css("display","block");
    });

   // 앱 카드 애니메이션
    $(".service-card").on({
        "mouseover":function(){
            $(this).children(".card-show").css({'transform':'translate(-70px, -100px)', 'opacity':'0', 'transition':'0.35s', 'pointer-events':'none'});
            $(this).children(".card-hide").css({'transform':'translate(0, 0)', 'opacity':'1', 'transition':'0.35s', 'pointer-events':'none'});
            $(this).css({'transform': 'scale(1.07)', 'transition': '0.25s'});
        },
        "mouseout":function(){
            $(this).children(".card-show").css({'transform':'translate(0,0)', 'opacity':'1', 'transition':'0.35s', 'pointer-events':'none'});
            $(this).children(".card-hide").css({'transform':'translate(70px, 100px)', 'opacity':'0', 'transition':'0.35s', 'pointer-events':'none'});
            $(this).css({'transform': 'scale(1)', 'transition': '0.25s'});
        }
    });
});  
