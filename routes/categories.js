const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const categoriesController = require("../controllers/categories");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Cakes Routes - simplified for now
router.get("/:categories", ensureAuth, categoriesController.getPost);

router.put("/likePost/:id", categoriesController.likePost);

router.delete("/deletePost/:id", categoriesController.deletePost);

module.exports = router;