const { User } = require("../db");

const infoUser = [
    {
        name: "Renso",
        surname: "Olariaga",
        mail: "renso@ganga.com",
        password: "asd12345",
        cellphone: 123123123,
        address: "La Plata",
        country: "Argentina",
        province: "Buenos Aires",
        cp: 5000,
        admin: true,
        birthdate: "1996-07-26",
        seller: true
    },
    {
        name: "igna",
        surname: "estiga",
        mail: "igna@ganga.com",
        password: "asd12345",
        cellphone: 123123123,
        birthdate: "1996-07-26",
        address: "Santiago",
        country: "Argentina",
        province: "Santiago del Estero",
        cp: 5000,
        seller: true
    },
    {
        name: "eze",
        surname: "camargo",
        mail: "eze@ganga.com",
        password: "asd12345",
        cellphone: 123123123,
        birthdate: "1996-07-26",
        address: "Coruña",
        country: "Argentina",
        province: "Cordoba",
        cp: 5000,
        seller: false

    },
    {
        name: "seba",
        surname: "torres",
        mail: "seba@ganga.com",
        password: "asd12345",
        cellphone: 123123123,
        birthdate: "1996-07-26",
        address: "Colombia",
        country: "Colombia",
        province: "Cartajena",
        cp: 5000,
        seller: false

    },

]

async function preLoadUser() {
    try {
        await User.bulkCreate(infoUser);
    } catch (error) {
        console.log("error: ", error);
    }
}

module.exports = {
    preLoadUser,
};
