import { Router } from "express";
import {  ConsultController } from "../controller/ConsultController";


const router = Router()
const consultController = new ConsultController()

router.post("/create" , consultController.create)
router.get("/getAll" , consultController.getAll)
router.get("/getById/:id" , consultController.getById)
router.put("/finish/:id" , consultController.finishMarking)
router.get("/seeking" , consultController.searchUser)


export default router