const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const soupsController = require("../controllers/soups");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Cakes Routes - simplified for now
router.get("/", ensureAuth, soupsController.getPost);

router.put("/likePost/:id", soupsController.likePost);

router.delete("/deletePost/:id", soupsController.deletePost);

module.exports = router;