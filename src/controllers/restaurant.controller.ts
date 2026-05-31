import { T } from '../libs/types/common'
import { Request, Response } from 'express'
const restaurantController: T = {};
import MemberService from '../models/Member.service'




/** Restaurant */

// send | json | redirect | end | render
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome")
        res.send("Home Page")
    } catch (err) {
        console.log("ERROR, goHome:", err)
    }

};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin")
        res.send("Login Page")
    } catch (err) {
        console.log("ERROR, getLogin:", err)
    }

};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup")
        res.send("Sign Up Page")
    } catch (err) {
        console.log("ERROR, getsignUp:", err)
    }

};


restaurantController.processLogin = (req: Request, res: Response) => {
    try {
        console.log("processLogin")
        res.send("POSTMAN DONE")
    } catch (err) {
        console.log("ERROR, getsignUp:", err)
    }

};

restaurantController.processSignup = (req: Request, res: Response) => {
    try {
        console.log("processSignup")
        res.send("POSTMAN SIGNUP DONE")
    } catch (err) {
        console.log("ERROR, getsignUp:", err)
    }

};

/** Product */
/** User */


export default restaurantController;