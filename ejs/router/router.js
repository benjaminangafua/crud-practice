const express = require('express')
const aboutController = require("../controller/aboutController")
const router = express.Router()


router.get('/', aboutController.regForm);
router.post("/getForm", aboutController.sendFormDataToJson)
router.get('/getForm', aboutController.getFormData);
router.get('/displayContact', aboutController.displayContact);
// router.get("/contact",aboutController)

module.exports = router
