// const { model } = require("mongoose");

// const { OrderSchemas } = require('../Schemas/OrderSchemas');

// const OrderModels = new model("order", OrderSchemas);
// module.exports = { OrderModels };
const mongoose = require("mongoose");
const orderSchema = require("../Schemas/OrderSchemas");

const OrderModel = mongoose.model("order", orderSchema);
module.exports = OrderModel;

