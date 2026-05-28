import { T } from '../libs/types/common'
import { Request, Response } from 'express'
const restaurantController: T = {};
import MemberService from '../models/Member.service'

restaurantController.goHome = (req: Request, res: Response) => {
    try {
        res.send("Home Page")
    } catch (err) {
        console.log("ERROR, goHome:", err)
    }

};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        res.send("Login Page")
    } catch (err) {
        console.log("ERROR, getLogin:", err)
    }

};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        res.send("Sign Up Page")
    } catch (err) {
        console.log("ERROR, getsignUp:", err)
    }

};

export default restaurantController;