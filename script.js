const circle = document.querySelector('.circle')
const circleStyle = circle.style
const textHover = document.querySelector('h2')
let resetTimer



// function to reset the circle
function resetCircle () {
  circleStyle.transform = `scale(1)`
}


// when mouse moves, the circle will move
document.addEventListener('mousemove', (evt) => {
  circleStyle.top = `calc(${evt.clientY}px - 52vh)`
  circleStyle.left = `calc(${evt.clientX}px )`
  circleStyle.transform = `scale(1.6)`

  // clears the previous timeout
  clearTimeout(resetTimer)

  // set a new timeout to reset circle after 1 second of inactivity
  resetTimer = setTimeout(resetCircle, 1000)
})





