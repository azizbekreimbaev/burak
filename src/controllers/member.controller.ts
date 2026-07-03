import { T } from '../libs/types/common'
import { Request, Response } from 'express'
import { LoginInput, Member, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';
import MemberService from '../models/Member.service';
import Errors, { HttpCode } from '../libs/Errors';
import AuthService from '../models/Auth.service';
import { AUTH_TIMER } from '../libs/config';

// SPA - REACT uchun 

const memberController: T = {};

const memberService = new MemberService();
const authService = new AuthService();

memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log("signup");
        console.log("body:", req.body);

        const input: MemberInput = req.body,
            result: Member = await memberService.signup(input),
            token = await authService.createToken(result);

        res.cookie("accessToken", token, { maxAge: AUTH_TIMER * 3600 * 1000, httpOnly: false });


        res.status(HttpCode.CREATED).json({ member: result, accessToken: token })


    } catch (err) {
        console.log("ERROR, signup:", err)
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
        // res.json({})
    }

};

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log("login");
        console.log("bodY:", req.body);
        const input: LoginInput = req.body,
            result = await memberService.login(input),
            token = await authService.createToken(result);

        res.cookie("accessToken", token, { maxAge: AUTH_TIMER * 3600 * 1000, httpOnly: false });


        res.status(HttpCode.OK).json({ member: result, accessToken: token })
    } catch (err) {
        console.log("ERROR, login:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
        // res.json({});
    }

};




export default memberController;