
$(document).ready(() => {
  fetch('api/v1/colors')
  .then(response => {
    return response.json()
  }).then(colors => {
  displayColors(colors)
  })
})

displayColors = (colors) => {
  return mappedColors = colors.map(color => {
    return $('.colors').prepend(`<div class="card" style="background-color:${color.color}">${color.color}</div>`)
  })
}

$('.user-input').on('keypress', () => {
  console.log('hello')
})

$('.user-click').on('click', () =>{
  console.log('hi')
})









