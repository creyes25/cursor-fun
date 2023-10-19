const circle = document.querySelector('.circle')
const circleStyle = circle.style

document.addEventListener('mousemove', (evt) => {
  circleStyle.top = `${evt.clientY}px`
  circleStyle.left = `${evt.clientX}px`

})