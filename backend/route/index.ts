import {Router} from "express"
import crmRouter from "./CRMRouter"
import authRouter from "./authRouter";
const router = Router();

router.use("/crm",crmRouter);
router.use("/auth",authRouter);
export default router;