const nodemailer = require("nodemailer");
const { userMessageTemplate } = require("../utils/Templates/templateHTML");

const createTrans = () => {
    let transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "gangaecommerce@gmail.com",
            pass: "Gangamail0987",
        },
    });
    return transport;
}


async function userMessage(req, res) {
    const { nombre, ciudad, telefono, correo, mensaje } = req.body;

    if (nombre && ciudad && telefono && correo && mensaje) {
        try {
            const transporter = createTrans();
            const info = await transporter.sendMail({
                from: '"GanGa" <gangaecommerce@gmail.com>',
                to: "jaicodigital@gmail.com",
                subject: "Comunicado de un usuario de GanGa",
                html: userMessageTemplate(nombre, ciudad, telefono, correo, mensaje)
            });
            res.send('su mensaje ha sido enviado')
        } catch (error) {
            console.log(error.body.errors);
            res.send('su mensaje no ha sido enviado')
        }
    } else {
        res.send('su mensaje no ha sido enviado')
    }
}

module.exports = {
    userMessage,
};