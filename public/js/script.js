
let initialArray = []
let colorsArray = [
  { colorValue: '#E5E5E5', locked: false },
  { colorValue: '#2A31D7', locked: false },
  { colorValue: '#D72AC6', locked: false },
  { colorValue: '#38D72A', locked: false },
  { colorValue: '#D7C62A', locked: false }
]

$('.palette-name').submit(savePalette)

$('.user-click').on('click', () => {
  postColors()
})

$(document).ready(() => {
  getProjects();
  getPalettes();
  displayColors()
})

updateColorGenerator = (array) => {
  colorsArray.forEach(color => {
  let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);}).toUpperCase();
    color.colorValue = randomColor
  })
  return 
}

function saveProjects() {
  fetch('api/v1/projects', {
    method: 'POST',
    head: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
  .then(resonse => console.log('Success'))
}

function getPalettes() {
  fetch('api/v1/palettes') 
  .then(response => {
    return response.json()
  }).then(palettes => {
    
  })
}

function getProjects() {
  fetch('api/v1/projects')
  .then(response => {
    return response.json()
  }).then(projects => {
    
  })
}

$('body').on("keypress",(e) => {
  if(e.keyCode == 32) {
    updateColorGenerator()
    displayColors() 
  }
})

function toggleLock() {
  let locked = '../assets/lock.svg'
  let unlocked = '../assets/unlock.svg'

  $(this).toggleClass('locked');
  $(this).removeClass('unlocked');
  $(this).attr('src', $(this).hasClass('locked') ? locked : unlocked);
  $(this).attr('src', $(this).hasClass('') ? unlocked : locked);
}
 
displayColors = (colors) => {
  $('.colors').empty('.card')
  if($('.colors').hasClass("locked ")) {
    console.log('this')
  }
  return mappedColors = colorsArray.map(color => {
    return $('.colors').prepend(`<div class="card" style="background-color:${color.colorValue}">${color.colorValue}<img src="../assets/unlock.svg"></img></div>`)  
    
  })
}

updateColors = () => {
  colorsArray.forEach(color => {
    console.log(color)
  })
}

postColors = () => {
  const savedArray = colorsArray
  return fetch('/api/v1/projects ', { method: 'POST', headers:  {
    "Content-Type": "application/json"},
    body: JSON.stringify(savedArray)
}).then(response => response.json())
}

$('.colors').on("click", ".card img", toggleLock);

function savePalette(event) {
  console.log('hi')
}











