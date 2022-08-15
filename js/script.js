window.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
    loop: false,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    autoplay: {
      delay: 5000,
    },
  });

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$(document).ready(function() {
  $('.faq__item').click(function(event) {
    if($('.faq__block').hasClass('up')){
      $('.faq__title').not($(this));
      $('.faq__text').not($(this).next()).slideUp(300).next().removeClass('active');
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});

$(document).ready(function() {
  $( "#tabs" ).tabs();
});
})

