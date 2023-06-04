$('.trigger').click(function() {
  $(this).toggleClass('active')
  $('.modal-gnb').fadeToggle()
})

//audio
let bgm = document.querySelector('#myAudio')
bgm.volume = 0.2