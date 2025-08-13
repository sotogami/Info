$(document).ready(function () {
  const $contactLink = $('#contact-link');
  const $contactPopupContainer = $('#contact-popup');

  $contactLink.on('click', function (e) {
    e.preventDefault();

    $.get('html/contact-popup.html', function (data) {
      $contactPopupContainer.html(data).fadeIn(); // 팝업 삽입 후 보여주기
    });
  });

  // 닫기 버튼 클릭 시
  $contactPopupContainer.on('click', '#close-popup', function () {
    $contactPopupContainer.fadeOut();
  });

  // 팝업 외부 클릭 시 닫기
  $contactPopupContainer.on('click', function (e) {
    if ($(e.target).is($contactPopupContainer)) {
      $contactPopupContainer.fadeOut();
    }
  });
});
