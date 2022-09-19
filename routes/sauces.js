const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const saucesController = require("../controllers/sauces");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Cakes Routes - simplified for now
router.get("/", ensureAuth, saucesController.getPost);

router.put("/likePost/:id", saucesController.likePost);

router.delete("/deletePost/:id", saucesController.deletePost);

module.exports = router;