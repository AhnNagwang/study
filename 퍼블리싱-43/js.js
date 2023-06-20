$('.search .field input[type=search]').focus(function() {
  $(this).parent().next().css('display', 'block')
})

$('.search .field input[type=search]').blur(function() {
  $(this).parent().next().css('display', 'none')
})

$('.fa-light').click(function() {
  $('.modal-search').addClass('active')
})

$('.close-search, section').click(function() {
  $('.modal-search').removeClass('active')
})