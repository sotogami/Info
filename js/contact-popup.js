$(document).ready(function () {
  const $contactLink = $('#contact-link');
  const $contactPopupContainer = $('#contact-popup');
  
  $contactLink.on('click', function (e) {
    e.preventDefault();

    $.get('html/contact-popup.html', function (data) {
      $contactPopupContainer.html(data).fadeIn(); // 팝업을 삽입하고 나타나게 함
    });
  });


  $contactPopupContainer.on('click', '#close-popup', function () {
    $contactPopupContainer.fadeOut(); // 팝업 닫기
  });

  $(window).on('click', function (e) {
    if ($(e.target).is($contactPopupContainer)) {
      $contactPopupContainer.fadeOut(); // 팝업 닫기
    }
  });
});
