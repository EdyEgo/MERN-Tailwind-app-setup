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

// GET all workouts
router.get("/", getLetters);

// GET a single workout
router.get("/:id", getLetter);

// POST a new workout
router.post("/", createLetter);

// DELETE a workout
router.delete("/:id", deleteLetter);

// UPDATE a workout
router.patch("/:id", updateLetter);

module.exports = router;
