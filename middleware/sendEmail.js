const nodemailer= require('nodemailer')

module.exports= async(email, subject, text) => {
    
    try{
        const transporter= nodemailer.createTransport({
            service: "hotmail",
            auth:{
                user: process.env.USER,
                pass: process.env.PASS
            }
        });

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject,
            text
       }).then(() => console.log('Email sent Successfully'))
        .catch(err => console.log('Email not sent', err));
    }
    catch(err){
        console.log("Email not sent")
        console.log(err)
    }
}