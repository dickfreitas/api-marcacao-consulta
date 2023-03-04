import { Request , Response } from "express";
import {  ConsultBusiness } from "../business/ConsultBussiness";
import ConsultDatabase from "../database/ConsultDatabase";
import { ConsultDTO } from "../models/ConsultModels";
import transporter from "../services/mailTransporter";


const consultBusiness = new ConsultBusiness(new ConsultDatabase())
export class ConsultController {

    async create(req : Request , res : Response){
     
        try {
            const input : ConsultDTO = {
                name :req.body.name ,
                email : req.body.email,
                description :req.body.description,
                cpf :req.body.cpf,
                date : req.body.date,
                time : req.body.time,
        }
            const result =  await consultBusiness.create(input)

           
            
            res.send(result)
            
        } catch (error : any) {
            console.log(error.message)
        }
    }


    async getAll( req : Request , res : Response){
        try {
            const status : boolean  = req.query.status as any
            const result = await consultBusiness.getAll(status)
            res.send(result)
        } catch (error : any) {
            console.log(error.message)
        }
    }

    async getById(req : Request , res : Response){
        try {
            const id = req.params.id

           const event = await consultBusiness.getById(id)
           res.send(event)
        } catch (error : any) {
            console.log(error.message)
        }
    }

    async finishMarking( req : Request , res : Response){
        try {
            const id = req.params.id as string

            const event = await consultBusiness.finishMarking(id)

            res.send(event)

            
        } catch (error : any) {
            console.log(error.message)
        }
    }

    async searchUser(req : Request , res : Response) {
        try {
            const search = req.query.search as string

            const event = await consultBusiness.searchUser(search)

            res.send(event)
        } catch (error : any) {
            console.log(error.message)
        }
    }
}