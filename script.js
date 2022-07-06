new Swiper('.image-slider', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true, 
  },
});


$(document).ready(function() {
  $('.section-faq__title').click(function(event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
});