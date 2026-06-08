import { T } from '../libs/types/common'
import { Request, Response } from 'express'
const restaurantController: T = {};
import MemberService from '../models/Member.service'
import { AdminRequest, LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';
import Errors, { Message } from '../libs/Errors';



const memberService = new MemberService();

/** Restaurant */

// send | json | redirect | end | render
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome")
        res.render("home")
    } catch (err) {
        console.log("ERROR, goHome:", err)
        res.redirect('/admin')
    }

};


restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup")
        res.render("signup")
    } catch (err) {
        console.log("ERROR, getsignUp:", err)
        res.redirect('/admin')
    }

};

// DEFine
restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin")
        res.render("login")
    } catch (err) {
        console.log("ERROR, getLogin:", err)
        res.redirect('/admin')
    }

};



restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processSignup");
        console.log("body:", req.body);

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);

        // TODO:: SESSIONS AUTHENTICATION

        req.session.member = result;
        req.session.save(function () {
            res.send(result);
        })



        // res.send("POSTMAN SIGNUP DONE")
    } catch (err) {
        console.log("ERROR, getsignUp:", err)
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"): window.location.replace('admin/signup)</script>`);
    }

};


restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processLogin");
        console.log("bodY:", req.body);
        const input: LoginInput = req.body;
        const memberService = new MemberService();
        const result = await memberService.processLogin(input);
        // TODO: SESSIONS AUTHENTICATION

        req.session.member = result;
        req.session.save(function () {
            res.send(result);
        })


    } catch (err) {
        console.log("ERROR, processLogin:", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"): window.location.replace('admin/login)</script>`);
    }

};


restaurantController.logout = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processLogin");
        console.log("bodY:", req.body);

        req.session.destroy(function () {
            res.redirect("/admin");
        })

    } catch (err) {
        console.log("ERROR, processLogin:", err);
        res.redirect("/admin");
    }

};





restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => {
    try {
        console.log("checkAuthSession");

        if (req.session?.member)
            res.send(`<script> alert("${req.session.member.memberNick}")</script>`);
        else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}")</script>`);

    } catch (err) {
        console.log("ERROR, checkAuthSession:", err);
        res.send(err);
    }

};


/** Product */
/** User */


export default restaurantController;