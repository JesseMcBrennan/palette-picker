let colorsArray = []

randomColorGenerator = () => {
  // let colorsArray = []
  if(colorsArray.length < 5) {
  for (i = 0; i < 5; i++) {
    let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);}).toUpperCase();
    colorsArray.push(randomColor)
  }
}
  return colorsArray
}

$(document).ready(() => {
  const colors = randomColorGenerator()
  displayColors(colors)
})
 
// $(document).ready(() => {
//   fetch('api/v1/colors')
//   .then(response => {
//     return response.json()
//   }).then(colors => {
//   displayColors(colors)
//   })
// })

displayColors = (colors) => {
  $('.colors').empty('.card')
  return mappedColors = colors.map(color => {
    return $('.colors').prepend(`<div class="card" style="background-color:${color}">${color}</div>`)
  })
}

postColors = () => {
  const savedArray = colorsArray
  return fetch('/api/v1/palettes', { method: 'POST', headers:  {
    "Content-Type": "application/json"},
    body: JSON.stringify(savedArray)
}).then(response => response.json())
}

$(this).parent('card').on("click", function() {
  console.log('card click')
})

$('body').on("keypress",(e) => {
  if(e.keyCode == 32) {
    colorsArray = []
    let colors = randomColorGenerator();
    displayColors(colors);
  }
})

$('.user-input').on("keypress", () => {
  console.log('hello')
})

$('.user-click').on('click', () => {
  postColors()
})









