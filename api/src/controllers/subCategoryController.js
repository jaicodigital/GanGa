const { Subcategory } = require("../db.js");

const getAllSubCategories = async (req, res) => {
  try {
    const allSubCategories = await Subcategory.findAll();

    allSubCategories
      ? res.json(allSubCategories)
      : res.json("No se han encontrado las sub-categorías");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllSubCategories,
};
