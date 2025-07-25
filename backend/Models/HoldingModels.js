// const { model } = require("mongoose");

// const { HoldingSchemas } = require('../Schemas/HoldingSchemas');

// const HoldingModels = model("holding", HoldingSchemas);

// module.exports = HoldingModels; 

// backend/models/holdingModel.js
const mongoose       = require('mongoose');
const holdingSchema  = require('../Schemas/HoldingSchemas');   

// 👇  The model constructor (collection 'holdings')
const Holding = mongoose.model('holding', holdingSchema);

module.exports = Holding;              
