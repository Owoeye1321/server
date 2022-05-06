const router = require('express').Router()
  const randomNumber = Math.floor(Math.random() * 20)
const con = require('../controller/database')
router.get('/',( req, res) =>{
   sess = req.session
   sess.identity = randomNumber
   console.log(sess.identity)
     const sql = "SELECT id, author, content from randQuote WHERE id = ?"
     con.query(sql, [randomNumber],(err, result) => {
         if(!err)res.json(result);console.log(err)
     })
})

module.exports = router