const Letter = require("../models/testModel");
const mongoose = require("mongoose");

// get all letters async
// const getLetters = async (req, res) => {
//   console.log("xxxxxxx");
//   const letters = await Letter.find({}).sort({ createdAt: -1 });

//   console.log("bruh come on", letters);
//   res.status(200).json(letters);
// };

// get all letters sync
const getLetters = async (req, res) => {
  console.log("xxxxxxx");
  const letters = await Letter.find({}).sort({ createdAt: -1 });

  console.log("bruh come on", letters);
  res.status(200).json(letters);
};

// get a single letter
const getLetter = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such letter" });
  }

  const letter = await Letter.findById(id);

  if (!letter) {
    return res.status(404).json({ error: "No such letter" });
  }

  res.status(200).json(letter);
};

// // create a new letter async
// const createLetter = async (req, res) => {
//   console.log("bruh", req);
//   const { title, count, textContent } = req.body;

//   let emptyFields = [];

//   if (!title) {
//     emptyFields.push("title");
//   }
//   //   if (!count) {
//   //     emptyFields.push("count");
//   //   }
//   if (!textContent) {
//     emptyFields.push("textContent");
//   }
//   if (emptyFields.length > 0) {
//     return res
//       .status(400)
//       .json({ error: "Please fill in all fields", emptyFields });
//   }

//   // add to the database
//   try {
//     const letter = await Letter.create({ title, count, textContent });
//     res.status(200).json(letter);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// create a new letter async
const createLetter = async (req, res) => {
  console.log("bruh", req);
  const { title, count, textContent } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  //   if (!count) {
  //     emptyFields.push("count");
  //   }
  if (!textContent) {
    emptyFields.push("textContent");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  // add to the database
  try {
    const letter = await Letter.create({ title, count, textContent });
    res.status(200).json(letter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a letter
const deleteLetter = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such letter" });
  }

  const letter = await Letter.findOneAndDelete({ _id: id });

  if (!letter) {
    return res.status(400).json({ error: "No such letter" });
  }

  res.status(200).json(letter);
};

// update a letter
const updateLetter = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such letter" });
  }

  const letter = await Letter.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!letter) {
    return res.status(400).json({ error: "No such letter" });
  }

  res.status(200).json(letter);
};

module.exports = {
  getLetters,
  getLetter,
  createLetter,
  deleteLetter,
  updateLetter,
};
