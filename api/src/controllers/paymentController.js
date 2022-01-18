const { Payment, User } = require("../db.js");

const postPayment = async (req,res) => {
    //Atributos del body para pasar en postman
    const {
        state,
        idUser
    } = req.body;

    try {
        //lo creamos con datos del body
        const newPayment = await Payment.create({
            state
        });

        newPayment ? res.send(await newPayment.setUser(idUser)) : console.log('No se ha podido relacionar el pago con el usuario')

        //si pasa por body, lo muestro, si no, error
        newPayment ? res.json(newPayment) : res.json('No se ha podido hacer el pago.')
    }
    catch (error) {
        console.log(error)
    };
}

const allPayments = async (req,res) => {
    //recibo id por query (url)
    const { id } = req.query;

    try {
        if (id) {//si recibo id, busco en la BD
            const paymentById = await Payment.findByPk(id);
            paymentById ? res.json(paymentById) : res.json(`No se ha encontrado el pago con id: ${id}`);
        } else {//si no recibo id, me traigo todos los pagos
            const allPayment = await Payment.findAll();
            allPayment ? res.json(allPayment) : res.json('Error al buscar los pagos');
        }
    } catch (error) {
        console.log(error)
    };
}

const deletePayment = async (req,res) => {
    //recibo id por query (url)
    const { id } = req.query;

    try {
        const deletePayment = await Payment.findByPk(id);

        deletePayment ? res.send(await deletePayment.destroy()) : res.json('No se pudo eliminar el pago')
    } catch (error) {
        console.log(error)
    };
}

const putPayment = async (req,res) => {
    const {
        id,
        state,
    } = req.body;

    try {
        const infoUpdatePayment = { state }
        const paymentById = await Payment.findByPk(id);
        paymentById ? res.send(await paymentById.update(infoUpdatePayment)) : res.json('No se pudo modificar el pago')
    } catch (error) {
        console.log(error)
    };
}

module.exports = {
    postPayment,
    allPayments,
    deletePayment,
    putPayment,
}