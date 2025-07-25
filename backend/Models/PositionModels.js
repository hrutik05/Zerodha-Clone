const mongoose = require("mongoose");
const positionSchema = require('../Schemas/PositionSchemas');


const PositionModel = mongoose.model("position", positionSchema);

module.exports = PositionModel;
