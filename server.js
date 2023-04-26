require('dotenv').config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));



app.get("/", function(req,res){
    res.render("home");
});
// app.post("/", function(req,res){
// console.log(req.body);
//   // async function mail(name, email, subject, message){
//     const transporter =  nodemailer.createTransport({
//       service: "gmail",
//       auth:{
//         user: process.env.GMAIL_EMAIL,
//         pass: process.env.PASSWORD
//       }
//     });
//     const mailOptions = {
//       // name : req.body.name,
//       from : req.body.email,
//       to: process.env.GMAIL_EMAIL,
//       subject: `Message from ${req.body.email}: ${req.body.subject}`,
//       text: req.body.message
//     }
//     transporter.sendMail(mailOptions,(error, info)=>{
//         if(err){
//           console.log(err);
//           res.send("error");
//         }
//         else{
//           console.log("Email sent: " + info.response)
//           res.send("done!")
//         }
//     })
    
// })
// app.post("/send-email", async function(req, res){
//   console.log(req.body);
//   let testAccount = await nodemailer.createTestAccount();
//   const transporter = nodemailer.createTransport({
   
//     host: 'smtp.gmail.com',
//     // service: "gmail",
//     port: 587,
//     secure: false,
//     requireTLS: true,
//     auth:{
//       user: process.env.GMAIL_EMAIL,
//       pass: process.env.PASSWORD
//       // user: 'kenneth99@ethereal.email', //for testing
//       //   pass: 'pDdw9TxWQsWchN3Jtf'
//     }
//     // socketTimeout: 100000
//   });
//   const mailOptions = {
//     from : `${req.body.name} <${process.env.GMAIL_EMAIL}>`,
//     // from : "subhamindian43@gmail.com",
    
//     to: req.body.email,
//     subject: req.body.subject,
//     // text: "Hello"
//     text: req.body.msg
    
//    };
//   console.log("m1")
//   transporter.sendMail(mailOptions, (error, info)=> { // fixed the error here
//     if(error){
//       console.log(error);
//       res.send("error");
//     }
//     else{
//       console.log("Email sent: " + info.response)
//       console.log(info.messageId);
//       res.send(info)
      
//     }
//   });
//   console.log("m2")
// });
console.log("hello")


app.listen(3000, function(){
    console.log("Server started on port 3000");
  });
