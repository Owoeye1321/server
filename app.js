const express = require('express')
  const app = express()
   var session = require('express-session')
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
  cookie:{
    secure: true,
    maxAge:60000
       },
  secret:"OwoeyeSamuelOlamide",
  saveUninitialized:true,
  cookie:{maxAge:oneDay},
  resave:false
}))
  app.use(express.json())
const PORT = 8080

app.use('/user',require('./routes/user'))
app.use('/fetchApi',require('./routes/apiCall'))
app.use('/forward',require('./routes/forward'))
app.use('/backward',require('./routes/backward'))
app.use('/sendMail',require('./routes/sendEmail'))  
//Middleware for an undefined routes
app.use('*',( req, res )=>{
    res.send("Hello there, you seem lost on this site. Kindly check the correct web address")
})
app.listen( PORT, () => {
    console.log('Listening to port' + ' ' + PORT)
  })