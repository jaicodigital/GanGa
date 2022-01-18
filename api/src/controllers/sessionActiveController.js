async function sessionActive(req, res) {
  if (req.user)
    res.json({
      login: true,
      id: req.user.id,
      admin: req.user.admin,
      seller: req.user.seller,
      name: req.user.name,
      surname: req.user.surname,
      mail: req.user.mail,
      birthdate: req.user.birthdate,
      cellphone: req.user.cellphone,
      address: req.user.address,
      country: req.user.country,
      province: req.user.province,
      cp: req.user.cp,
      image: req.user.image,
      Cart: req.user.Cart
    });
    else res.json({ login: false });
}


module.exports = {
  sessionActive
};


