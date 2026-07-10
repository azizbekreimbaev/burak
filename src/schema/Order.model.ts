import mongoose from "mongoose";
import { Schema } from "mongoose";
import { orderStatus } from "../libs/enums/order.enum";



const orderSchema = new Schema({
    orderTotal: {
        type: Number,
        require: true,
    },

    orderDelivery: {
        type: Number,
        required: true,
    },

    orderStatus: {
        type: String,
        enum: orderStatus,
        default: orderStatus.PAUSE
    },

    memberId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Member"
    }
},
    {
        timestamps: true, collection: "orders"
    });


export default mongoose.model("Order", orderSchema)