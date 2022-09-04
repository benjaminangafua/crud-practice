const express = require('express')
const aboutController = require("../controller/aboutController")
const router = express.Router()


router.get('/', aboutController.displayContact);
router.get('/form', aboutController.regForm);
router.post("/form", aboutController.sendFormDataToJson)
router.get('/getForm', aboutController.getFormData);
// router.get("/contact",aboutController)

module.exports = router
