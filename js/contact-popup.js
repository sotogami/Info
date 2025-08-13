$(function () {
  const $contactLink = $('#contact-link');
  const $popup = $('#contact-popup');

  // body 바로 아래로 이동 (iOS transform 버그 회피)
  $popup.appendTo('body');

  // 혹시 이전에 붙은 핸들러가 있으면 제거(다중 포함 대비)
  $popup.off('.popup');
  $(document).off('.popup');
  $contactLink.off('.popup');

  // 열기
  $contactLink.on('click.popup', function (e) {
    e.preventDefault();
    if ($popup.is(':empty')) {
      $.get('html/contact-popup.html', function (html) {
        $popup.html(html).addClass('open');
        $('body').addClass('body--lock');     // 스크롤 잠금(선택)
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
