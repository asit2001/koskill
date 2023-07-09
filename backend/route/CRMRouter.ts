import {Router} from "express"
import { getCRM,createCRM,deleteCRM,updateCRM } from "../controller/CRMController";
import auth from "../middleware/authMiddleware";

const router = Router();
router.use(auth)
router.get("/",getCRM);
router.post("/",createCRM);
router.put("/",updateCRM);
router.delete("/",deleteCRM);

export default router