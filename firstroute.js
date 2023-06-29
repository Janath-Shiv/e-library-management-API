const express = require("express");
const {getAll} = require("../controller/firstconnection");
const {addNew} = require("../controller/firstconnection");
const {getOne} = require("../controller/firstconnection");
const {updateOne} = require("../controller/firstconnection");
const {deleteOne} = require("../controller/firstconnection");
const router = express.Router();
router.route("/").get(getAll);
router.route("/addNew").post(addNew);
router.route("/:id").get(getOne);
router.route("/:id").put(updateOne);
router.route("/:id").delete(deleteOne);
module.exports = router