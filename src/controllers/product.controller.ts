import Errors from "../libs/Errors";
import { T } from "../libs/types/common";
import { Request, Response } from 'express';
import ProductService from "../models/Product.service";

const productController: T = {};
const productService = new ProductService;

productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log("getAllProducts");
        res.render("products");
    } catch (err) {
        console.log("ERROR, getAllProducts:", err)
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }

};

productController.createNewProduct = async (req: Request, res: Response) => {
    try {
        console.log("createNewProduct")
    } catch (err) {
        console.log("ERROR, createNewProduct:", err)
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }

};

productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log("updateChosenProduct")
    } catch (err) {
        console.log("ERROR, updateChosenProduct:", err)
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }

};


export default productController;
