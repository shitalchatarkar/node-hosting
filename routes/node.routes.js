const { addnode, getnote, updatenote, deletenote } = require("../controllers/node.controller")

const router = require("express").Router()
router
    .post("/", addnode)
    .get("/add", getnote)
    .put("/modify/:nid", updatenote)
    .delete("/remove/:nid", deletenote)
module.exports = router