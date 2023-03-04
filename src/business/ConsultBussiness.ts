import ConsultDatabase from "../database/ConsultDatabase";
import { ConsultDTO, ConsultModels  } from "../models/ConsultModels";
import transporter from "../services/mailTransporter";



export class ConsultBusiness {
    constructor( private consultDatabase : ConsultDatabase){}

    async create (input : ConsultDTO) {
        try {
         const {name , email , description , cpf , date , time  } = input

         if(!name || !email || !description || !cpf || !date || !time ){
            throw new Error("Some fields were missing to be filled")
         } 

         if(!email.includes("@")){
            throw new Error("Invalid email")
         }
         
         const sendEmail = await transporter.sendMail({
            from : process.env.NODEMAILER_USER,
            to : email,
            subject : "Marcação de Consulta",
            text : "",
            html : `<p>${name}. A sua marcação concluida com sucesso </p>`
        })
         
            const result = await this.consultDatabase.create(ConsultModels.toConsult({
                ...input,
                finished : false
            }))
           
            
            return result
        } catch (error : any) {
            return error.message
        }
    }

    async getAll( status : boolean) : Promise<ConsultDTO[]>{
        try {
            if(!status){
                status = false
            }
           
            const result = await this.consultDatabase.getAll(status )
           
            if(!result.length){
                throw new Error("No customers checked")
            }

            return result
        } catch (error : any) {
            return error.message
        }
    }

    async getById(id : string) : Promise<void>{
        try {
            if(!id){
                throw new Error("Need to inform the id for the query")
            }
            
            const result = await this.consultDatabase.getById(id)
           return result
         
        } catch (error : any) {
            return error.message
        }
    }

    async finishMarking(id : string) : Promise<void>{
        try {
            if(!id){
                throw new Error("Need to inform the user id to complete the query")
            }
            
            const event = await this.consultDatabase.finishMarking(id)

            return event
        } catch (error : any) {
            return error.message
        }
    }

    async searchUser(search : string) {
        try {
            if(!search){
                throw new Error("Enter a parameter to search")
            }

            const event = await this.consultDatabase.searchUser(search)

            return event
        } catch (error : any) {
            return error.message
        }
    }
}