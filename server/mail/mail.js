var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sg60@iitbbs.ac.in',
    pass: 'sarthak1234'
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