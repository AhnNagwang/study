$('.login button').click(function() {
  var num = $('#id').val()
  if(num === '') {
    alert('나이를 입력하세요')
  } else if(num<20) {
    alert('미성년자입니다.')
  } else if (num>20 ) {
    alert('성입니다.')
  } else {
    alert('입력내용을 숫자로')
  }
})