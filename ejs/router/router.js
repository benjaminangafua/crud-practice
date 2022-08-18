const express = require('express')
const aboutController = require("../controller/aboutController")
const router = express.Router()


router.get('/', (req, res) => {
    res.render('index');
  });
router.get("/contact",aboutController)

module.exports = router
