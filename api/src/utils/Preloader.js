const {
    preLoadSubCategory } = require('./PreLoadSubCategory.js');

const {
    preLoadCategory } = require('./PreLoaderCategory.js');

const {
    preLoadProduct } = require('./PreLoaderProduct.js');

const {
    preLoadUser } = require('./PreLoaderUser.js');

async function preloader() {
    await preLoadSubCategory()
    await preLoadCategory()
    await preLoadProduct()
    await preLoadUser()
}

module.exports = {
    preloader
}