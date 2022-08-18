const express = require("express")


const about = ((req,res)=>{
    res.json({"hi":"How are you"})
})

module.exports = about

// const getProducts = ((req, res) => {
//     res.json(products)
// })

// module.exports = {
//     getProducts,
//     getProduct,
//     createProduct,
//     updateProduct,
//     deleteProduct
// }