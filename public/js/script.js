
let colorsArray = []

$(document).ready(() => {
  const colors = randomColorGenerator()
  displayColors(colors)
})

randomColorGenerator = () => {
  if(colorsArray.length < 5) {
  for (i = 0; i < 5; i++) {
    let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);}).toUpperCase();
    colorsArray.push(randomColor)
  }
}
  return colorsArray
}

 
$(document).ready(() => {
  fetch('api/v1/projects')
  .then(response => {
    return response.json()
  }).then(colors => {
  displayColors(colors)
  })
})

// function updateColors() {
//   $('.colors').each(function(i) {
//     if($(this).attr('src', $(this).hasClass('locked'))) {
//       return;
//     } else {
//       let color;
//       if(colors.length) {
//         color = colors[i]
//       } else {
//         randomColorGenerator()
//       }
//     }
//   })
// }


// function updateColors(colors = []) {
//   currentColors = [];
//   $('.colors').each(function(i) {
//     if($(this).attr('img', $(this).hasClass('locked'))) {
//       } else {
//     let color;
//     if(colors.lenght) {
//       color = colors[i]
//     } else {
//       color = randomColorGenerator()
//     }
//     }
//   })
// }

function toggleLock() {
  let locked = '../assets/lock.svg'
  let unlocked = '../assets/unlock.svg'

  $(this).toggleClass('locked');
  $(this).attr('src', $(this).hasClass('locked') ? locked : unlocked);
}

displayColors = (colors) => {
  $('.colors').empty('.card')
  return mappedColors = colors.map(color => {
    return $('.colors').prepend(`<div class="card" style="background-color:${color}">${color}<img class="unlocked" src="../assets/unlock.svg"></img></div>`)
  })
}

postColors = () => {
  const savedArray = colorsArray
  return fetch('/api/v1/palettes', { method: 'POST', headers:  {
    "Content-Type": "application/json"},
    body: JSON.stringify(savedArray)
}).then(response => response.json())
}

$('.colors').on("click", ".card img", toggleLock);

$('body').on("keypress",(e) => {
  if(e.keyCode == 32) {
    colorsArray = []
    let colors = randomColorGenerator();
    // updateColors()
    displayColors(colors);
  }
})

$('.user-input').on("keypress", () => {
  console.log('hello')
})

$('.user-click').on('click', () => {
  postColors()
})









