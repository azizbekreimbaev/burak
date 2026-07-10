import { ObjectId } from "mongoose";
import { orderStatus } from "../enums/order.enum";


export interface OrderItemInput {
    itemQuantity: number;
    itemPrice: number;
    productId: ObjectId;
    orderId?: ObjectId;
}

export interface Order {
    _id: ObjectId;
    orderTotal: number;
    orderDelivery: number;
    orderStatus: orderStatus;
    createdAt: Date;
    updatedAt: Date;
}

export interface OrderItem { 
    _id: ObjectId;
    itemQuantity: number;
    itemPrice: number;
    orderId: ObjectId;
    productId: ObjectId;
    createdAt: Date;
    updatedAt: Date;
    
}