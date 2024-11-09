const {Schema}=require('mongoose');
const OrdersSchema=({
    name: String,
    qty: Number,
    price: Number,
    mode:String,
})
module.exports={OrdersSchema}