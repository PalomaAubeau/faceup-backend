var express = require("express");
var router = express.Router();

const uniqid = require("uniqid");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

router.post("/upload", async (req, res) => {
  const date = new Date();
  const photoPath = `./tmp/${uniqid()}-${date}.jpg`;
  console.log(req.files);
  const resultMove = await req.files.photoFromFront.mv(photoPath); // photoFromFront propriété reçu du front

  if (!resultMove) {
    //si undefined, ça veut dire RAS dans ce cas là = tout s’est bien passé
    const resultCloudinary = await cloudinary.uploader.upload(`${photoPath}`);
    fs.unlinkSync(`${photoPath}`);
    res.json({ result: true, url: resultCloudinary.secure_url });
  } else {
    res.json({ result: false, error: resultCopy });
  }
});

module.exports = router;
