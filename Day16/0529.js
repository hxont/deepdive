$(document).ready(function() {
    // 팝업 열기
    $('#openPopup').on('click', function() {
        $('.overlay').fadeIn(300);
        $('.popup').slideDown(300);
    });

    // 팝업 닫기
    $('#closePopup, .overlay').on('click', function() {
        $('.popup').slideUp(300);
        $('.overlay').fadeOut(300);
    });
});
