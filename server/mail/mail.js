var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.ID,
    pass: process.env.PASS
  }
}); 

const mail=(To,From,Subject,Message)=>{       
      var mailOptions = {
        from: From,
        to: To,
        subject: Subject,
        text: Message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
};
module.exports=mail;