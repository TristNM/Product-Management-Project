// [GET] /admin/products

const Product = require("../../model/product.model");
module.exports.products= async (req, res) => {
    let filterStatus = [
        {
            name: "All",
            status: "",
            class: "active"
        },
        {
            name: "Active",
            status: "active",
            class: ""
        },
        {
            name: "Inactive",
            status: "inactive",
            class: ""
        }
    ]

    if(req.query.status){
        filterStatus = filterStatus.map((item) => {
            if(item.status === req.query.status){
                item.class = "active"
            } else {
                item.class = ""
            }
            return item
        })
    }


    let find = {
        deleted: false,
    };
    if (req.query.status){
        find.status = req.query.status 
    }
    
    const products = await Product.find(find);

    res.render("admin/pages/products/index.pug", {
        title: "Products",
        products: products,
        filterStatus: filterStatus
    });
}

