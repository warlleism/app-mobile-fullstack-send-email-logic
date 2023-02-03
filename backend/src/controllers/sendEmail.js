
const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "warlleimartinsprof@gmail.com",
        pass: "npsudirxzncgstfr"
    },
    tls: {
        rejectUnauthorized: false,
    }

})

const Contato = async (req, res) => {
    // var { nome, telefone, email, descricao } = req.body;

    try {

        const mailSent = await transport.sendMail({
            text: "texto do email",
            subject: 'Contato',
            from: "Warllei Martins <warlleimartinsdev@outlook.com",
            to: ["warlleimartinsdev@outlook.com"]
        })

        return res.send({mailSent})

    } catch (err) {
        return res.send({ err: err })
    }
}

module.exports = Contato;