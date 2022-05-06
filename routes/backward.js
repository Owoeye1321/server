const router = require('express').Router()
const con = require('../controller/database')
router.get('/',( req, res) =>{
   sess = req.session
   if(sess.identity > 0){
       const revId = sess.identity - 1
       sess.identity = revId
       console.log(sess.identity)
    const sql = "SELECT author, content from randQuote WHERE id = ?"
    con.query(sql, [revId],(err, result) => {
        if(!err)res.json(result);console.log(err)
    })
   }else{
    res.send('invalid')
}

})

module.exports = router