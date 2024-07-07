// [GET] /admin/products

const Product = require("../../model/product.model");
module.exports.products= async (req, res) => {
    const products = await Product.find({
        deleted: false
    });
    res.render("admin/pages/products/index.pug", {
        title: "Products",
        products: products
    });
}

