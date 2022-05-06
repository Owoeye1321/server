const router = require('express').Router()
  const con = require('../controller/database')
router.post('/',(req, res ) =>{
  sess = req.session
    const email = req.body.email
    sess.email = email
    console.log(sess.email)
        const sql = "SELECT * FROM users WHERE email = ?"
        con.query(sql, [ email ], ( outerErr, outerResult ) => {
          if(!outerErr){
            if(outerResult.length){
              res.send('user exist')
            }else{
          const innerSql = "INSERT INTO users(email) VALUES(?)"
        con.query(innerSql,[email],( innerErr, innerResult) => {
    if(!innerErr)res.send('success');console.log(innerErr);
                })
            }
          }else{console.log(outerErr)}
        })

})

module.exports  = router