const { json } = require("express");
const fs = require("fs");
const path = "data.json"; 

/**
 * A function that returns an HTML form to the client
 * @param {string} req - request an HTMLDOm 
 * @param {Object} res - render a DOM form to the client
 * @returns 
 */
const regForm = ((req,res)=>res.render('index') );
const displayContact =(req, res)=>res.render("contactTable") ;

/**
 * A function that sends data to the client from a form
 * @param {Object} req - Get an object from the contact form
 * @param {Object} res - Send a respond to the client
 * @return {string} sendFormDataToJson() - return void
 */
const sendFormDataToJson = ((req,res)=>{
    fs.readFile(path, {encoding:"utf-8"}, (err, data)=>{
        let dat = JSON.parse(data)
        dat.push(req.body)
        if(err)
            console.error({err})
        fs.writeFile(path, JSON.stringify(dat), er=>console.error({er}))
    })
    res.send(req.body)
}) 

// Separate the routes to send data
const getFormData =(req,res)=>{
    fs.readFile(path, {encoding:"utf-8"}, (err, data)=>{
        let json = data
        if(!err){             
            res.send(JSON.parse(data));
            
        }
    })
}
module.exports = {
    regForm,
    displayContact, 
       
    sendFormDataToJson,
    getFormData,
}
