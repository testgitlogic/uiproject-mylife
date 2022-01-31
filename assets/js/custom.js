$(document).ready(function () {
  // mob-menu
  $('.mob-menu').click(function () {
    $(this).toggleClass('active');
    $('.navigation').slideToggle();
  });
  $('.icon-user').click(function () {
    $(this).toggleClass('active');
    $('.user-menu').slideToggle();
  })
  // slick slider
  $('.explore-wrapper').slick({
    centerMode: true,
    mobileFirst: true,
    centerPadding: '69px',
    arrows: false,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          centerPadding: '0',
          slidesToShow: 6
        }
      },
    ]
  });
  // responsive
  $('.workouts-wrapper').slick({
    dots: false,
    arrows: true,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
    ]
  });
})