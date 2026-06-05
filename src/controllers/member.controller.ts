import { T } from '../libs/types/common'
import { Request, Response } from 'express'
import { LoginInput, Member, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';
import MemberService from '../models/Member.service';
import Errors from '../libs/Errors';

// SPA - REACT uchun 

const memberController: T = {};

const memberService = new MemberService();

memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log("signup");
        console.log("body:", req.body);

        const input: MemberInput = req.body,
            result: Member = await memberService.signup(input);
        // TODO: TOKENS
        
        res.json({ member: result })
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
        result = await memberService.login(input)
        // TODO: TOKENS
        
        res.json({ member: result })
    } catch (err) {
        console.log("ERROR, login:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
        // res.json({});
    }

};




export default memberController;