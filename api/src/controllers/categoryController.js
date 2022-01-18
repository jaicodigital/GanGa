const { Category, Subcategory } = require("../db.js");

const postCategory = async (req, res) => {
  const {name, idSubcategory} = req.body;

  try{

    const newCategory = await Category.create(name);

    newCategory ? await newCategory.setSubcategory(idSubcategory) : console.log('No se ha podido relacionar la categoria con la subcategoría')

    newCategory ? res.send(newCategory) : res.send('No se ha podido crear la categoría')
  }
  catch(error) {
    console.log(error)
  }
}

const getAllCategories = async (req, res) => {

  try {
    const allCategories = await Category.findAll({
      include: [{
        model: Subcategory,
        attributes: ['name'],
      }]
    });

    allCategories
      ? res.json(allCategories)
      : res.json("No se han encontrado las categorías");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCategories,
  postCategory
};
