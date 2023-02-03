
const nodemailer = require('nodemailer')



const Contato = async (req, res) => {
    // var { nome, telefone, email, descricao } = req.body;

    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port:process.env.PORT_MAIL,
        secure: false,
        auth: {
            user: process.env.PRIVATE_EMAIL,
            pass: process.env.PRIVATE_PASSWORD
        },
        tls: {
            rejectUnauthorized: false,
        }

    })


    try {

        const mailSent = await transport.sendMail({
            text: "texto do email",
            subject: 'Contato',
            from: "Warllei Martins <warlleimartinsdev@outlook.com",
            to: ["warlleimartinsdev@outlook.com"]
        })

        return res.send({ mailSent })

    } catch (err) {
        return res.send({ err: err })
    }
}

module.exports = Contato;