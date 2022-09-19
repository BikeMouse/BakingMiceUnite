const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const cakesController = require("../controllers/cakes");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Cakes Routes - simplified for now
router.get("/", ensureAuth, cakesController.getPost);

router.put("/likePost/:id", cakesController.likePost);

router.delete("/deletePost/:id", cakesController.deletePost);

module.exports = router;