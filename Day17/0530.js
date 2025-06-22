let isClick = false;
let isClick1 = false;
let isClick2 = false;

$(document).ready(function () {
    // 텍스트 위로 등장
    $('#textBtn').click(function () {
        if (!isClick) {
            isClick = true;
            $('#hiddenText').slideToggle(1000);
            $('#textBtn').text("다시 들어가기")
        }
       else {
           isClick = false;
            $('#hiddenText').slideToggle(1000);
            $('#textBtn').text("텍스트 등장시키기")
        }

    });
    $('#correctBtn').click(function () {
        if (!isClick1) {
            isClick1 = true;
            $('#correct').text("정답 : 구름 !! ☁️")
            $('#correctBtn').text("정답 숨기기")
        }
        else {
            isClick1 = false;
            $('#correct').text("정답 : (숨겨짐)")
            $('#correctBtn').text("정답 공개️")
        }
    })
    // 박스 색상 전환
    $('#basicBtn').click(function () {
        $('#box').css('background-color', 'black');
    });
    $('#greyBtn').click(function () {
        $('#box').css('background-color', 'grey');
    });
    $('#blueBtn').click(function () {
        $('#box').css('background-color', 'lightblue');
    });
    $('#pinkBtn').click(function () {
        $('#box').css('background-color', 'pink');
    });
    // 리스트 한 줄씩 등장
    $('#listBtn').click(function () {
        if (!isClick2) {
            isClick2 = true;
            $("#1li").slideDown(1000);
            $("#2li").slideDown(2000);
            $("#3li").slideDown(3000);
            $('#listBtn').text("다시 들어가기")
        }
        else {
            isClick2 = false;
            $("#1li").slideUp(3000);
            $("#2li").slideUp(2000);
            $("#3li").slideUp(1000);
            $('#listBtn').text("등장하기")
        }
    });
    // 팝 효과
    $('#popBtn').click(function () {
        $('#box2').css({ width: '50px', height: '50px', display: 'block' });
        $('#box2').animate({ width: '100px', height: '100px' }, 200);
    });
    // 이건 실패
    // $('#bounceBtn').click(function () {
    //     $('#box2').animate({ top: '-40px' }, 1500);
    //     $('#box2').animate({ top: '0px' }, 1500);
    //     $('#box2').animate({ top: '-20px' }, 1200);
    //     $('#box2').animate({ top: '0px' }, 1200);
    // });

    // 텍스트 사라지기
    $('#minusBtn').click(function () {
        $('#removeText').fadeOut(1000);
    });
    $('#plusBtn').click(function () {
        $('#removeText').fadeIn(1000);
    });
});
