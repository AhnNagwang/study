

$('.title').click(function() {
  $(this).addClass('active')
  $(this).siblings('.title').removeClass('active')

  $(this).siblings('.desc').stop().slideUp()
  $(this).next().stop().slideDown()

  let dataImage = $(this).attr('data-image')
  $('.image img').attr('src',dataImage)
})