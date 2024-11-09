const {Schema}=require('mongoose');
const PositionSchema=({
    product: String,
    name:  String,
    qty: Number,
    avg: Number,
    price: Number,
    net:  String,
    day:  String,
    isLoss: Boolean
})
module.exports={PositionSchema}