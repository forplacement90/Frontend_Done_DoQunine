const mongoose = require("mongoose");
const { Schema } = mongoose;

const RepositorySchema = new Schema({
  
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    maxLength: 60
  },
  content: [
    {
      type: String,
    },
  ],
  visibility: {
    type: Boolean, //true and flase
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  issues: [
    {
      type: Schema.Types.ObjectId,
      ref: "Issue",
    },
  ],
});

const Repository = mongoose.model("Repository", RepositorySchema);
module.exports = Repository;