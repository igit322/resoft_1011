$(document).ready(function () {
  $(window).load(function () {
    $("#load").hide();
  });
  //  네비바 햄버거
  $(".ham").click(function () {
    if ($(".so").hasClass("more")) $(".so").addClass("magictime fadeOut");
    else if ($(".so").hasClass("close"))
      $(".so").removeClass("magictime fadeOut");
  });
  //
  $(".ham").click(function () {
    if ($(".so").hasClass("close")) {
      $(".so").addClass("magictime fadeIn");
      $(".so").addClass("more").removeClass("close");
    } else if ($(".so").hasClass("more")) {
      setTimeout(function () {
        $(".so").addClass("close").removeClass("more");
      }, 500);
    }
  });

  $(function () {
    const newsCont = $(".news-cont");
    const thirdPoint = document.getElementById("thirdPoint");

    newsCont.hide();
    newsCont.slice(0, 6).show();
    $(".loadButton").click(function () {
      newsCont.slice(6, 10).show();
      $(".loadButton").hide();
      $(".news-cont:last-child").css("margin-bottom", "5.8vw");
      window.scrollBy({
        top: thirdPoint.getBoundingClientRect().top - 100,
        behavior: "smooth",
      });
    });
  });

  //  페이지 동작시 콘텐츠 갯수 및 클래스 지정
  // const newsCont = $('.news-cont');
  // const saveButton = $('.saveButton');
  // const loadButton = $('.loadButton');

  // if(window.matchMedia("screen and (max-width: 768px)").matches){

  //     $(function(){
  //         newsCont.hide();
  //         saveButton.hide();
  //         newsCont.slice(0,4).show();
  //         loadButton.addClass('firstLoad');
  //         // buttonSet(0,4,768);
  //         $('.btn-group-vertical>.btn-group:not(:first-child)>.btn, .btn-group-vertical>.btn~.btn').css({'border-top-left-radius':'100%','border-top-right-radius':'100%'})
  //     });
  // }else if(window.matchMedia("screen and (max-width: 1024px)").matches){
  //     $(function(){
  //         newsCont.hide();
  //         newsCont.slice(0,6).show();
  //         loadButton.addClass('secondLoad');
  //         // buttonSet(0,6,1024);
  //         saveButton.addClass('thirdSave');
  //     });
  // }else if(window.matchMedia("screen and (max-width: 1920px)").matches){
  //     $(function(){
  //         newsCont.hide();
  //         newsCont.slice(0,8).show();
  //         loadButton.addClass('thirdLoad');
  //         // buttonSet(0,8,1920);
  //         saveButton.addClass('secondSave');
  //     });
  // }else{
  //     loadButton.hide();
  //     saveButton.addClass('firstSave');
  //     $('.btn-group-vertical>.btn-group:not(:last-child)>.btn, .btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle)').css({'border-bottom-left-radius':'100%','border-bottom-right-radius':'100%'});
  // }

  // 펼치기 버튼을 눌렀을때 작동
  // loadButton.click(function() {
  //     if(loadButton.hasClass('firstLoad')){
  //         const secondPoint = document.getElementById('secondPoint');
  //         newsCont.slice(4,6).show();
  //         saveButton.show();
  //         window.scrollBy({top: secondPoint.getBoundingClientRect().top,behavior:'smooth'});
  //         loadButton.removeClass('firstLoad').addClass('secondLoad');
  //         saveButton.addClass('thirdSave');
  //         $('.btn-group-vertical>.btn-group:not(:first-child)>.btn, .btn-group-vertical>.btn~.btn').css({'border-top-left-radius':'0','border-top-right-radius':'0'})
  //     }else if(loadButton.hasClass('secondLoad')){
  //         const thirdPoint = document.getElementById('thirdPoint');
  //         newsCont.slice(6,8).show();
  //         saveButton.show();
  //         window.scrollBy({top: thirdPoint.getBoundingClientRect().top,behavior:'smooth'});
  //         loadButton.removeClass('secondLoad').addClass('thirdLoad');
  //         saveButton.addClass('secondSave').removeClass('thirdSave');
  //     }else if(loadButton.hasClass('thirdLoad')){
  //         const fourthPoint = document.getElementById('fourthPoint');
  //         newsCont.slice(8,10).show();
  //         saveButton.show();
  //         window.scrollBy({top: fourthPoint.getBoundingClientRect().top,behavior:'smooth'});
  //         loadButton.removeClass('thirdLoad');
  //         saveButton.addClass('firstSave').removeClass('secondSave');
  //         loadButton.hide();
  //         $('.btn-group-vertical>.btn-group:not(:last-child)>.btn, .btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle)').css({'border-bottom-left-radius':'100%','border-bottom-right-radius':'100%'});
  //     };
  // });
  // 접기 버튼을 눌렀을때 작동
  // saveButton.click(function() {
  //     if(saveButton.hasClass('firstSave')){
  //         const thirdPoint = document.getElementById('thirdPoint');
  //         window.scrollBy({top: thirdPoint.getBoundingClientRect().top,behavior:'smooth'});
  //         newsCont.slice(8,10).hide();
  //         loadButton.show();
  //         saveButton.removeClass('firstSave').addClass('secondSave');
  //         loadButton.addClass('thirdLoad').removeClass('secondLoad');
  //         $(".footer").css({'margin-top':"0"});
  //         $('.btn-group-vertical>.btn-group:not(:last-child)>.btn, .btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle)').css({'border-bottom-left-radius':'0','border-bottom-right-radius':'0'});
  //     }else if(saveButton.hasClass('secondSave')){
  //         const secondPoint = document.getElementById('secondPoint');
  //         window.scrollBy({top: secondPoint.getBoundingClientRect().top,behavior:'smooth'});
  //         newsCont.slice(6,8).hide();
  //         loadButton.show();
  //         saveButton.removeClass('secondSave').addClass('thirdSave');
  //         loadButton.addClass('secondLoad').removeClass('firstLoad');
  //     }else if(saveButton.hasClass('thirdSave')){
  //         const firstPoint = document.getElementById('firstPoint');
  //         window.scrollBy({top: firstPoint.getBoundingClientRect().top,behavior:'smooth'});
  //         newsCont.slice(4,6).hide();
  //         loadButton.show();
  //         saveButton.hide();
  //         saveButton.removeClass('thirdSave');
  //         loadButton.addClass('firstLoad');
  //         $('.btn-group-vertical>.btn-group:not(:first-child)>.btn, .btn-group-vertical>.btn~.btn').css({'border-top-left-radius':'100%','border-top-right-radius':'100%'})
  //      };
  // });
});
