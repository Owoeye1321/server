const express = require('express')
const nodemailer = require('nodemailer')
const router =  express.Router()
const con = require('../controller/database')

router.get('/',(req,res) =>{
   const sess = req.session
   if(sess.email){
   console.log(sess.email)
   console.log(sess.identity)
   const sql = "SELECT author, content from randQuote WHERE id = ?"
    con.query(sql, [sess.identity],(err, result) => {
        if(!err){
            const data = res.json(result)
            console.log(data)
        }else{
            console.log(err)}
    })
   }else{
       res.send('invalid')
   }
    
})

router.post('/',(req, res)=>{
    const author =   "The author name here" //req.body.details.author
    const content = "The content here"   // req.body.details.content


    const username = sess.user
    const to = sess.email
    const from = "owoeye1321@gmail.com"
    const subject = "Random motivation"
    const text = `<h1>${author}</h1> \n <h2> ${content} </h2>`
   
        async function main() {
        
                // create reusable transporter object using the default SMTP transport
                    let transporter = await nodemailer.createTransport({
                      host: "smtp.gmail.com",
                          port: 465,
                      secure: true, // true for 465, false for other ports
                    auth: {
                        user: "owoeye1321@gmail.com", // generated ethereal user
                        pass: "Owoeye1234", // generated ethereal password
                }
                },(err, result)=>{
                    if(!err)console.log(result);console.log(err)
                });
        
            // send mail with defined transport object
            let info = await transporter.sendMail({
               from:from, // sender address
                    to: to, // list of receivers
                        subject: subject, // Subject line
                   html:text// plain text body
              
            },(err, result)=>{
                if(!err){ console.log(result);res.send('success')}else{console.log(err)}
            }); 
        
        // console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }
        
        main().catch(console.error);



})
module.exports = router