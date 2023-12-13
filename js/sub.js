$(function(){

    var price_sum = 13950;
    $(".price_sum").append("<span>" + price_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원 </span>");

//총 상품금액
    $('.plus').click(function(){
        if ($(".price_value").val() > 29) {
            alert("31권 초과 구매가 불가능합니다.");
            $(".price_value").val(30);
        }else {
            $(".price_value").val(parseInt($(".price_value").val())+1);
            var sum = parseInt($(".price_value").val() * price_sum);
            $(".price_sum").html("<span>" + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
        }
    });

    $('.minus').click(function () {

         if ($(".price_value").val() < 2) {
           alert("1권 이상 구매가 가능합니다.");
           $(".price_value").val(2);
         }

         $(".price_value").val(parseInt($(".price_value").val()) - 1);
         var sum = parseInt($(".price_value").val() * price_sum);
         $(".price_sum").html("<span>" + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");

    });

    // sub_box li 클릭 후 이동
    $('#btn1').click(function(){
      $('html, body').animate({scrollTop: 1200}, 1000)      
    });

    $('#btn2').click(function(){
      $('html, body').animate({scrollTop: 3900}, 1000)      
    });

    $('#btn3').click(function(){
      $('html, body').animate({scrollTop: 4800}, 1000)      
    });

    $('#btn4').click(function(){
      $('html, body').animate({scrollTop: 6000}, 1000)      
    });

    $('#btn5').click(function(){
      $('html, body').animate({scrollTop: 6600}, 1000)      
    });

    $('#btn6').click(function(){
      $('html, body').animate({scrollTop: 6800}, 1000)      
    });

      //menu mouse hover 전체카테고리
      $("#menu_mouse").mouseover(function(){
          $(this).children("#menu_ul").stop().fadeIn();
      }).mouseout(function(){
          $("#menu_ul").stop().fadeOut();
      });
});


// sub_box fixed
$(document).ready(function () {
  $(window).scroll(function () {
    //offset().top > 위에서 부터 section까지 내려오고 후 this scrolltop 이 섹션보다 클 때 시작함
    //height()를 넣으면 section 박스의 높이가 커서 조건이 맞지 않아 fixed 적용이 안됌
    //15는 top+15 높일수록 늦게 고정됌
    
    if ($(this).scrollTop() > $("#sub_section").offset().top+15) {
      $("#sub_box").addClass("on");
    } else {
      $("#sub_box").removeClass("on");
    }
  });
});

// .txt
$(function () {
  $.get("./1.책소개.txt", function (data) {
    $("#intro").html(data);
  })
  
});

$(function () {
  $.get("./2.책속으로.txt", function (data) {
    $("#sub_in").html(data);
  })
});

$(function () {
  $.get("./3.출판사서평.txt", function (data) {
    $("#sub_company").html(data);
  })
  
});