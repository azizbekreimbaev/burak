import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberInput } from "../libs/types/member";
import MemberModel from "../schema/Member.model";

class MemberService {
    private readonly memberModel;


    constructor() {
        this.memberModel = MemberModel;   //shartli kichik harflar bilan aslida 
    }

    // public async processSignup(): Promise<void> {
    //     console.log("Passed here from MEMBER SERVICE MODEL")
    // }
    public async processSignup(input: MemberInput): Promise<string> {
        const exist = await this.memberModel
            .findOne({ memberType: MemberType.RESTAURANT })
            .exec();
        console.log("exist:", exist);
        if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);   // ozimiz creatre qilgan errrorni korsatib bermoqdamiz


        try {
            const result = await this.memberModel.create(input);   //inputimiz pass qilamiz db yozishi uchun
            result.memberPassword = "";
            return result

            // const tempResult = new this.memberModel(input);
            // const result = await tempResult.save();



        } catch (err) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);   // ozimiz creatre qilgan errrorni korsatib bermoqdamiz
        }

        // console.log("Passed here from MEMBER SERVICE MODEL")
    }
}
export default MemberService;