$(function () {
  const $contactLink = $('#contact-link');
  const $popup = $('#contact-popup');

  $contactLink.on('click', function (e) {
    e.preventDefault();
    if ($popup.is(':empty')) {
      $.get('html/contact-popup.html', function (html) {
        $popup.html(html).addClass('open');
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error('HTML 파일 로드 실패:', textStatus, errorThrown);
      });
    } else {
      $popup.addClass('open');
    }
  });

  $popup.on('click', '#close-popup', function () {
    $popup.removeClass('open');
  });

  $(window).on('click', function (e) {
    if ($(e.target).is($popup)) {
      $popup.removeClass('open');
    }
  });

  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      $popup.removeClass('open');
    }
  });


  // WORKS 링크에 대한 준비 중 알림
  function showComingSoonAlert() {
    Swal.fire({
      title: '준비 중입니다',
      icon: 'info',
      iconColor: '#ffffff',
      background: '#1e1e1e',
      color: '#f5f5f5',
      confirmButtonColor: '#444',
      confirmButtonText: '확인',
      scrollbarPadding: false,
      customClass: {
        popup: 'custom-popup',
        title: 'custom-title',
        confirmButton: 'custom-button'
      }
    });
  }

  // WORKS 링크 클릭 시 알림 띄우기
  $('a[href="#"]:not(#contact-link)').on('click', function (e) {
    e.preventDefault();
    showComingSoonAlert();
  });

  // .card 클릭 시 알림 띄우기
  const $worksCard = $('.card');
  if ($worksCard.length) {
    $worksCard.on('click', function () {
      showComingSoonAlert();
    });
  }

  // 페이드인 업 애니메이션 (스크롤 시 요소 등장)
  const fadeEls = $('.fade-in-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const $el = $(entry.target);
      if (entry.isIntersecting) {
        $el.addClass('show');
      } else {
        $el.removeClass('show');  
      }
    });
  }, {
    threshold: 0.1
  });

  fadeEls.each((i, el) => {
    $(el).css('animation-delay', `${i * 0.2}s`);
    observer.observe(el);
  });

  // 접기/펼치기 버튼
  const $toggleBtn = $('.toggle-button');
  const $content = $('.expandable-content');

  $toggleBtn.on('click', function () {
    $content.toggleClass('show');
    $toggleBtn.text($content.hasClass('show') ? '▲ 접기' : '▼ 지뢰? 불호?');
  });

  // 마지막 업데이트 날짜 표시
  const updatedDate = new Date(document.lastModified);
  const formatted = updatedDate.toLocaleDateString("ko-KR", {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  $('#last-update').text(formatted);

  // "맨 위로" 버튼 표시
  const $backToTopBtn = $('#backToTop');

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
      $backToTopBtn.addClass('show');
    } else {
      $backToTopBtn.removeClass('show');
    }
  });

  // "맨 위로" 버튼 클릭 시 스크롤 맨 위로 이동
  $backToTopBtn.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 'smooth');
  });

  // 헤더 축소
  $(window).on('scroll', function () {
    const $header = $('header');
    if ($(window).scrollTop() > 50) {
      $header.addClass('shrink');
    } else {
      $header.removeClass('shrink');
    }
  });
});
