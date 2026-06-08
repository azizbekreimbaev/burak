import { T } from '../libs/types/common'
import { Request, Response } from 'express'
const restaurantController: T = {};
import MemberService from '../models/Member.service'
import { LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';



const memberService = new MemberService();

/** Restaurant */

// send | json | redirect | end | render
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome")
        res.render("home")
    } catch (err) {
        console.log("ERROR, goHome:", err)
    }

};


restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup")
        res.render("signup")
    } catch (err) {
        console.log("ERROR, getsignUp:", err)
    }

};

// DEFine
restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin")
        res.render("login")
    } catch (err) {
        console.log("ERROR, getLogin:", err)
    }

};



restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("processSignup");
        console.log("body:", req.body);

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);

        // TODO:: SESSIONS AUTHENTICATION

        res.send(result)
        // res.send("POSTMAN SIGNUP DONE")
    } catch (err) {
        console.log("ERROR, getsignUp:", err)
        res.send(err)
    }

};


restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log("processLogin");
        console.log("bodY:", req.body);
        const input: LoginInput = req.body;
        const memberService = new MemberService();
        const result = await memberService.processLogin(input);
        // TOD: SESSIONS AUTHENTICATION


        res.send("result");
    } catch (err) {
        console.log("ERROR, processLogin:", err);
        res.send(err);
    }

};


/** Product */
/** User */


export default restaurantController;