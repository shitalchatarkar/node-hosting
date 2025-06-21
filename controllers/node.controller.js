const Notes = require("../models/Notes")

const addnode = async (req, res) => {
    await Notes.create(req.body)
    res.json({ massage: "note create success" })

}
const getnote = async (req, res) => {
    const result = await Notes.find(req.body)
    res.json({ massage: "note fetch success", result })

}
const updatenote = async (req, res) => {
    const { nid } = req.params
    const result = await Notes.findByIdAndUpdate(nid, req.body)
    res.json({ massage: "note update success" })

}
const deletenote = async (req, res) => {
    const { nid } = req.params
    const result = await Notes.findByIdAndDelete(nid)
    res.json({ massage: "note delete success" })

}
module.exports = { addnode, getnote, updatenote, deletenote }
