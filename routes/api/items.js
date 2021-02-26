const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

router.get("/", async (req, res) => {
  const items = await Item.find();

  res.json(items);
});

router.post("/", async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  const item = await newItem.save();
  res.status(200).json(item);
});

router.delete("/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  try {
    item.remove();
    res.status(200).send({ success: true });
  } catch (err) {
    response.status(404).send({success: false, msg: "Could not delete"})
  }
});

module.exports = router;
