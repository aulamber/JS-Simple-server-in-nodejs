import express from 'express'
import bodyParser from 'body-parser'

const app = express()

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/register', (req, res) => {
  console.log('on arrive sur le server, a /register')
  //console.log('req.headers = ', req.headers)
  console.log('req.body = ', req.body)
  res.send('Data received')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
