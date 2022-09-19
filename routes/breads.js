const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const breadsController = require("../controllers/breads");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Cakes Routes - simplified for now
router.get("/", ensureAuth, breadsController.getPost);

router.put("/likePost/:id", breadsController.likePost);

router.delete("/deletePost/:id", breadsController.deletePost);

module.exports = router;