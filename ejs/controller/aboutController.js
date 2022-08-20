const { json } = require("express");
const fs = require("fs");
const path = "data.json"; 

const regForm = ((req,res)=>res.render('index') );

const getForm = ((req,res)=>{
    
    let parseData =[];
    fs.readFile(path, { flag: 'r' }, (err, data)=>{
        parseData.push(JSON.parse(data))
        
    })

    console.log(parseData);

    fs.writeFile(path, JSON.stringify(parseData.toString()), err=>console.error({err}))

    res.json(req.body)
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