import mongoose, { model, Schema } from 'mongoose';
const OrderSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    order_data: {
        type: Array,
        required: true,
    },

});
export const Order =mongoose.model('Order',OrderSchema );
