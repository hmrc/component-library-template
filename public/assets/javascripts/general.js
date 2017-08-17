function scaleHeight() {
  var scaleWrapper = document.querySelectorAll('.scale-wrapper')
  var scale = document.querySelectorAll('.scale')

  for (var i = 0; i <= scaleWrapper.length - 1; i++) {

    scaleWrapper[i].style.height = scale[i].offsetHeight / 2 + 'px'

  }
}
window.addEventListener('resize', function(){
  scaleHeight()
})
scaleHeight()
