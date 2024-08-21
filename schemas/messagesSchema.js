const mongoose = require("mongoose");
const config = require("../config.json");

mongoose.connect(config.mongodb_server);
const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Messages", messageSchema);
