import { Response } from "express";
import Errors, { HttpCode } from "../libs/Errors";
import { T } from "../libs/types/common";
import { ExtendedRequest } from "../libs/types/member";
import OrderService from "../models/Order.service";

const orderController: T = {};
const orderService = new OrderService();

orderController.createOrder = async (req: ExtendedRequest, res: Response) => {
    try {
        console.log("createOrder")
        const result = await orderService.createOrder(req.member, req.body);

        res.status(HttpCode.CREATED).json(result)
    } catch (err) {
        console.log("ERROR, verifyAuth:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
}




export default orderController;