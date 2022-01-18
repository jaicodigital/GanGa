const { User } = require("../db.js");

async function localLogin(req, res) {
  if(req.user)res.send(`hola ${req.user.name} espero que estes bien, este es tu id:  ${req.user.id}`)
  else res.send('no estas logeado...')
}


module.exports = {
  localLogin,
 };
