const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const letterSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: false,
    },
    textContent: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Letter", letterSchema);
