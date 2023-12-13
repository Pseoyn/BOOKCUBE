$(function () {
    var search;
    search = [
        "개",
        "출근길 유머",
        "물",
        "아브락사스의 정원",
        "성공과 인간관계",
        "뇌와 행동의 기초",
        "2050년의 서울",
        "송경화",
        "거의 모든 것의 드로잉",
        "건강과 행복한 삶을 위한 인성철학",
        "겸재 정선의 그림 선생",
        "결심이 필요한 순간들",
        "진동식",
        "나를 아끼는 정성스러운 생활",
        "내일의 스타벅스를 찾아라",
        "노정례의 작은 시집",
        "눈부시게 불완전한",
        "느리지만 단단하게 자라는 식물처럼 삽니다",
        "다태유",
        "도시정비론",
        "듀얼"
    ];

    var best;
    best = [
        "역사",
        "창조적 시선",
        "이원호",
        "불편한 편의점 2",
        "망원동 브라더스",
        "정지아",
        "경찰인사행정론",
        "마케팅 설계자",
        "홍은영",
        "아는 만큼 보인다",
        "노마드 투자자 서한",
        "금융거래와 법",
        "신민사소송법",
        "형법강론",
        "중국경제론",
        "오늘밤, 세계에서 이 사랑이 사라진다 해도",
        "행정학 콘서트",
        "진화심리학",
        "기본민법",
        "론리하트",
        "아무도 행복하지 않은 나라"
    ];

    var school;
    school = [
        "한국역사",
        "사회복지",
        "공무원",
        "경찰",
        "수학",
        "자바스크립트",
        "데이터베이스"
    ];

    var clock;
    clock = [
        "삼가",
        "김은",
        "있을 법한 모든 것",
        "추상오단장",
        "휴가지에서 생긴 일",
        "임솔아",
        "꿀벌의 예언",
        "팅커, 테일러, 솔저, 스파이",
        "백조와 박쥐",
        "회랑정 살인사건",
        "가장 아름다운 기억을 너에게 보낼게",
        "환상서점",
        "김인숙",
        "풍수전쟁",
        "뜨거운 피",
        "맡겨진 소녀",
        "오늘은 실컷 울어도 괜찮다",
        "망나니의 난",
        "인형관의 살인",
        "휴가지에서 생긴 일",
        "히가시노 게이고"
    ];

    var free;
    free = [
        "올어바웃북:이언 매큐언",
        "죽음과 재생 시의 업",
        "사이방가르드",
        "매장꾼의 아들",
        "행복을 찾아서",
        "해러스먼트 게임",
        "푸른 수염",
        "창공의 기병",
        "이상을향하여",
        "내가 가장 좋아하는 살인",
        "시로뽀개다, 죽음",
        "마지막 키스",
        "세계괴담모음",
        "복음이란 무엇인가",
        "사건의 내막",
        "매스매틱스1",
        "매스매틱스2",
        "매스매틱스3",
        "마음에 없는 소리",
        "실패한 매복",
        "이선생 우리말 도덕경"
    ];

$('#section').append('<div id="section_book1" class = "book" ></div>')
    for (i = 0; i < search.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search[i], sort: "latest" },
            async: false,
            headers: { Authorization: "KakaoAK 295b604291fb8a108a3185bd97547e45" }
        })

            .done(function (msg) {
                console.log(msg);
                
                    $('#section_book1').append('<div class="box_i' + i + ' box"></div>')
                    $('.box_i' + i).append("<a href='sub.html'><img src = '" + msg.documents[0].thumbnail + "'/></a>");
                    $('.box_i' + i).append("<h3>" + msg.documents[0].title + "</h3>");
                    $('.box_i' + i).append("<h6>" + msg.documents[0].authors[0] + "</h6>");


            });
    }

$('#section').append('<div id="section_book2" class = "book"></div>')
    for (b = 0; b < best.length; b++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: best[b], sort: "latest" },
            async: false,
            headers: { Authorization: "KakaoAK 295b604291fb8a108a3185bd97547e45" }
        })

            .done(function (msg) {
                console.log(msg);

                    $('#section_book2').append('<div class="box_b' + b + ' box"></div>')
                    $('.box_b' + b).append("<img src = '" + msg.documents[0].thumbnail + "'/>");
                    $('.box_b' + b).append("<h3>" + msg.documents[0].title + "</h3>");
                    $('.box_b' + b).append("<h6>" + msg.documents[0].authors[0] + "</h6>")
            });
    }

    $('#section').append('<div id="section_book3" class = "book"></div>')
    for (s = 0; s < school.length; s++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: school[s], sort: "latest" , size: 20},
            async: false,
            headers: { Authorization: "KakaoAK 295b604291fb8a108a3185bd97547e45" }
        })

            .done(function (msg) {
                console.log(msg);
                let origin = msg.documents;

                    //썸네일이 빈 문자열인것은 제외
                    let data = origin.filter((val)=>{
                        return val.thumbnail != '';
                    })

                    console.log(data);
                
                for (let j = 0; j < 3; j++) {
                    $('#section_book3').append('<div class="box_s' + s + ' box"></div>')
                    $('.box_s' + s).eq(j).append("<img src = '" + data[j].thumbnail + "'/>");
                    $('.box_s' + s).eq(j).append("<h3>" + data[j].title + "</h3>");
                    $('.box_s' + s).eq(j).append("<h6>" + data[j].authors[j] + "</h6>")
                }
            });
    }

$('#section').append('<div id="section_book4" class = "book"></div>')
    for (c = 0; c < clock.length; c++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: clock[c], sort: "latest" },
            async: false,
            headers: { Authorization: "KakaoAK 295b604291fb8a108a3185bd97547e45" }
        })

            .done(function (msg) {
                console.log(msg);

                    $('#section_book4').append('<div class="box_c' + c + ' box"></div>')
                    $('.box_c' + c).append("<img src = '" + msg.documents[0].thumbnail + "'/>");
                    $('.box_c' + c).append("<h3>" + msg.documents[0].title + "</h3>");
                    $('.box_c' + c).append("<h6>" + msg.documents[0].authors[0] + "</h6>")
            });
    }

$('#section').append('<div id="section_book5" class = "book"></div>')
    for (f = 0; f < free.length; f++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: free[f], sort: "latest" },
            async: false,
            headers: { Authorization: "KakaoAK 295b604291fb8a108a3185bd97547e45" }
        })

            .done(function (msg) {
                console.log(msg);

                    $('#section_book5').append('<div class="box_f' + f + ' box"></div>')
                    $('.box_f' + f).append("<img src = '" + msg.documents[0].thumbnail + "'/>");
                    $('.box_f' + f).append("<h3>" + msg.documents[0].title + "</h3>");
                    $('.box_f' + f).append("<h6>" + msg.documents[0].authors[0] + "</h6>")
            });
    }

});

//sort: "latest" > 최근날짜

