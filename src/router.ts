import express from 'express';
const router = express.Router();
import memberController from './controllers/member.controller'
import makeUploader from './libs/utils/uploader';
import productController from './controllers/product.controller';

router.get("/");

/** MEmber */
router.get("/member/restaurant", memberController.getRestaurant);

router.post("/member/login", memberController.login);

router.post("/member/signup", memberController.signup);

router.post("/member/logout", memberController.logout);

router.get("/member/detail", memberController.verifyAuth, memberController.getMemberDetail);

router.post(
    "/member/update",
    memberController.verifyAuth,
    makeUploader("members").single("memberImage"),
    memberController.updateMember
);


router.get("/member/top-users", memberController.getTopUsers);


/** Product */


router.get("/product/all", productController.getProducts);

router.get("/product/:id", memberController.retrieveAuth, productController.getProduct);

router.post 

export default router;
