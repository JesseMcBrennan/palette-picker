const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.set('port', 3000);

app.use(bodyParser.json())

app.use(express.static('public/'));
app.locals.title ='Palette Picker'
app.locals.colors = [
  {id: 1, color: '#E5E5E5'},
  {id: 2, color: '#2A31D7'},
  {id: 3, color: '#D72AC6'},
  {id: 4, color: '#38D72A'},
  {id: 5, color: '#D7C62A'}
]

app.get('/', (request, response) => {
  response.sendFile(_dirname + '/public/index.html')
})

app.get('/api/v1/colors', (request, response) => {
  response.status(200).json(app.locals.colors)
})

app.listen(app.get('port'), () => {
  console.log(`App is running on ${app.get('port')}.`)
})