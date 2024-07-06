const Product = require("../../model/product.model");

module.exports.products = async (req, res) => {
    try {
        const products = await Product.find({});
        console.log(products);
        res.render("clients/pages/products/index.pug", {
            title: "Products",
            products: products
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send("Internal Server Error");
    }
};
