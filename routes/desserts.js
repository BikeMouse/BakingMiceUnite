const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const dessertsController = require("../controllers/desserts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Cakes Routes - simplified for now
router.get("/", ensureAuth, dessertsController.getPost);

router.put("/likePost/:id", dessertsController.likePost);

router.delete("/deletePost/:id", dessertsController.deletePost);

module.exports = router;