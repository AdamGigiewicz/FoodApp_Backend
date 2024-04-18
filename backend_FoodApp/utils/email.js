const nodemailer = require("nodemailer");

async function sendEmail(userEmail, message){

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.AUTH_EMAIL,
            pass: process.env.AUTH_PASSWORD,
        }
    });

    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: userEmail, 
        subject: "Restauracje Wirtuozeria - kod weryfikacyjny",
        html: `<h1>Restauracja Wirtuozeria mail weryfikacyjny</h1>
               <p> Twój kod weryfikacyjny to: </p>
               <h2 style="color: blue;"> ${message}</h2>
               <p> Wprowadź ten kod na stronie weryfikacji, aby zakończyć proces rejestracji.</p>
               <p>Jeśli o to nie prosiłeś, zignoruj ten e-mail. </p>`   
    }

    try {
        await transporter.sendMail(mailOptions);
        console.log('Verification email sent');
    }catch (error) {
        console.log("Email sending failed with an error:", error)
    }
}

module.exports = sendEmail;