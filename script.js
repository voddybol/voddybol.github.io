$(document).ready(function() {
  $('.section-faq__title').click(function(event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
});