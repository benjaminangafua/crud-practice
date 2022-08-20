const regForm = ((req,res)=>res.render('index') )

const getForm = ((req,res)=>{
    res.json(req.body)
    console.log(req.body);
})


module.exports = {
    regForm,
    getForm

}

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