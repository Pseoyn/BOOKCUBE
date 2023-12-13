$(function () {

    var read;
    read = [
        "삼가",
        "환상서점",
        "매장꾼의 아들",
        "풍수전쟁",
        "휴가지에서 생긴 일",
        "임솔아",
        "가장 아름다운 기억을 너에게 보낼게",
        "회랑정 살인사건",
        "팅커 테일러 솔저 스파이",
        "행정학 콘서트",
        "오늘 밤, 세계에서 이 사랑이 사라진다 해도",
        "난세의 영웅"
    ];


    $('#readers').append('<div id="readers_book" ></div>')
    for (r = 0; r < read.length; r++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: read[r], sort: "latest" },
            async: false,
            headers: { Authorization: "KakaoAK 295b604291fb8a108a3185bd97547e45" }
        })

            .done(function (msg) {
                console.log(msg);

                $('#readers_book').append('<div class="box_r' + r + ' box1"></div>')
                $('.box_r' + r).append("<img src = '" + msg.documents[0].thumbnail + "'/>");
                $('.box_r' + r).append("<h3>" + msg.documents[0].title + "</h3>");
                $('.box_r' + r).append("<h6>" + msg.documents[0].authors[0] + "</h6>")

                var str = msg.documents[0].contents;

                var str2 = str.substring(0, 50);

                $('.box_r' + r).append("<p>" + str2 + '...' + "</p>");
            });
    }

})

