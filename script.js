const circle = document.querySelector('.circle')
const circleStyle = circle.style
const textHover = document.querySelector('h2')
let mouseMoving = false

setInterval(() => {
  if (mouseMoving === true) {
    mouseMoving = false
    circleStyle.transform = `scale(1)`
  }
}, 1000)


// when mouse moves, the circle will move
document.addEventListener('mousemove', (evt) => {
  circleStyle.top = `calc(${evt.clientY}px - 52vh)`
  circleStyle.left = `calc(${evt.clientX}px )`
  circleStyle.transform = `scale(1.6)`
  mouseMoving = true
})

