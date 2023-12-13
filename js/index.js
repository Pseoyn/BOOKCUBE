$(function(){

    //menu mouse hover 전체카테고리
    $("#menu_mouse").mouseover(function(){
        $(this).children("#menu_ul").stop().fadeIn();
    }).mouseout(function(){
        $("#menu_ul").stop().fadeOut();
    });
 
    //slide button and slide fade
    $("#control > a").click(function(){
        let con1 = $(this).index();

        $(this).addClass("on").siblings().removeClass("on"); //클릭하면 on 추가 , 자신을 제외한 형제들은 none
        $(".slide_video").filter(":visible").stop(true).fadeOut(400).end().eq(con1).stop(true).fadeIn(800);
        //보이는게 사라지고 다음 사진이 나타남, fadeout 부분을 지우면 위로 겹쳐지면서 전으로 못돌아감
    });
    $("#control a:first").addClass("on").add(".slide_video:first").show();

    $("#control > a").click(function(){
        let con2 = $(this).index();
        $(".slide_text").filter(":visible").stop(true).fadeOut(400).end().eq(con2).stop(true).fadeIn(800);
    });
    $(".slide_text:first").show(); 
      /* filter를 사용하여 imgbox 중 (:visivle) 보이는 이미지를 선택후 움직임을 멈추고 fadeout 후 다음 이미지
    filter 없이 visible로만 하면 보이는 이미지만 선택하여 작동이 안됌 */



    //section_textbox menu fade
    $("#ul > li").click(function(){
        let menu1 = $(this).index();
        console.log(menu1);
        $(".book").eq(menu1).stop().fadeIn(1000).css({display:'flex',}).
            siblings(".book").stop().fadeOut(200);
    });

    //menu button event
    $("#ul > li").click(function(){
        let menu2 = $(this).index();
        let w = $(this).width();
        console.log(w);
        console.log(menu2);
        $(this).find("h2").addClass("on").end().siblings().find("h2").removeClass("on");
        $("#section_textbox > span").stop().animate({
            left: menu2 * w,
        },300,"swing");
    });
    $("#ul > li").find("h2").eq(0).addClass("on");

    $(".event_box").mouseover(function(){
        $(this).css({
            //trasnform : hover 했을때 카드 위치 조정
            transform: 'translateX(-70px)'
        }).siblings().css({
            marginLeft: '-40px',
            marginRight: '-40px'
        })
    });

    $(".event_box").mouseout(function(){
        $(this).css({
            transform: 'translateX(0px)'
        }).siblings().css({
            marginLeft: '-70px',
            marginRight: '-70px',
        })
    });
});
