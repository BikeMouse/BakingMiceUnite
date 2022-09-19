const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const breakfastsController = require("../controllers/breakfasts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Cakes Routes - simplified for now
router.get("/", ensureAuth, breakfastsController.getPost);

router.put("/likePost/:id", breakfastsController.likePost);

router.delete("/deletePost/:id", breakfastsController.deletePost);

module.exports = router;