$('.accordion .item .title').click(function() {
  $(this).next().stop().slideToggle(100)
  $(this).toggleClass('active')
})

$('.accordion .item .content').click(function() {
  $(this).stop().slideUp(100)
})

