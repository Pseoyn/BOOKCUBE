$(function(){
    var together = [
        "아주 희미한 빛으로도",
        "레이크사이드",
        "메리골드 마음 세탁소",
        "아버지의 해방일지",
        "풍수전쟁",
        "러브 몬스터",
        "도서부 종이접기 클럽",
        "알래스카 한의원",
        "내게 남은 사랑을 드릴게요",
        "88번 버스의 기적",
        "해저도시 타코야키",
        "누구도 울지 않는 밤"
    ]

    
$('#together_section').append('<div class = "swiper-wrapper" ></div>')
for (i = 0; i < together.length; i++) {

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: together[i], sort: "latest" },
        async: false,
        headers: { Authorization: "KakaoAK 295b604291fb8a108a3185bd97547e45" }
        })

        .done(function (msg) {
            console.log(msg);
                $('.swiper-wrapper').append('<div class="box' + i + ' swiper-slide"></div>')
                $('.box' + i).append("<img src = '" + msg.documents[0].thumbnail + "'/>");
                $('.box' + i).append("<h3>" + msg.documents[0].title + "</h3>");
                $('.box' + i).append("<h6>" + msg.documents[0].authors[0] + "</h6>");
                $('.box' + i).append("<h6>" + msg.documents[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</h6>");
        });
}
$('#together_section').append('<div class = "swiper-scrollbar" ></div>')


});