$(function () {
  const $contactLink = $('#contact-link');
  const $popup = $('#contact-popup');
  $popup.appendTo('body');
  $popup.off('.popup');
  $(document).off('.popup');
  $contactLink.off('.popup');

  // 열기
  $contactLink.on('click.popup', function (e) {
    e.preventDefault();
    if ($popup.is(':empty')) {
      $.get('html/contact-popup.html', function (html) {
        $popup.html(html).addClass('open');
        $('body').addClass('body--lock');    
      });
    } else {
      $popup.addClass('open');
      $('body').addClass('body--lock');
    }
  });

  // 닫기 (X 버튼)
  $popup.on('click.popup', '#close-popup', function () {
    $popup.removeClass('open');
    $('body').removeClass('body--lock');
  });

  // 배경 클릭 닫기
  $popup.on('click.popup', function (e) {
    if (e.target === e.currentTarget) {
      $popup.removeClass('open');
      $('body').removeClass('body--lock');
    }
  });

  // ESC 닫기
  $(document).on('keydown.popup', function (e) {
    if (e.key === 'Escape') {
      $popup.removeClass('open');
      $('body').removeClass('body--lock');
    }
  });
});
