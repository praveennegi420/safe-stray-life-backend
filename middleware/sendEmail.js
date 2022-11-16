const nodemailer= require('nodemailer')

module.exports= async(email, subject, text) => {
    
    try{
        const transporter= nodemailer.createTransport({
            service: "hotmail",
            auth:{
                user: process.env.USER,
                pass: process.env.PASS
                // pass: 'lodosrnchtoyeuzf'
            }
        });

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject,
            text
        }, (err, info) => {
            if(err) { console.log("Email Not sent", err)}
            else console.log("Email Sent successfully.")
        });
    }
    catch(err){
        console.log("Email not sent")
        console.log(err)
    }
}