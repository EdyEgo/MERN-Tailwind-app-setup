const express = require("express");
const {
  createLetter,
  deleteLetter,
  getLetter,
  getLetters,
  updateLetter,
} = require("../controllers/testController");

const router = express.Router();

// router.get("/", (request, response) => {
//   response.json({ message: "Wellcome to this app" });
// });

// GET all letters
router.get("/", getLetters);

// GET a single letter
router.get("/:id", getLetter);

// POST a new letter
router.post("/", createLetter);

// DELETE a letter
router.delete("/:id", deleteLetter);

// UPDATE a letter
router.patch("/:id", updateLetter);

module.exports = router;
