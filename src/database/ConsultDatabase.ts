import mongoose from "mongoose"
import { ConsultMigrations } from "../migrations/ConsultMigrations"
import { ConsultDTO, ConsultModels } from "../models/ConsultModels"

const model : any = mongoose.model("consults" , ConsultMigrations)
export default class ConsultDatabase {
    public async create(infor : ConsultModels)  {
        const newConsult = new model({
            name : infor.getName(),
            email : infor.getEmail(),
            description : infor.getDescription(),
            cpf : infor.getCpf(),
            date : infor.getDate(),
            time : infor.getTime(),
            finished : infor.getFinished()
        })

       return newConsult.save()
     
    }

    public async getAll(status : boolean) : Promise<ConsultDTO[]>{

        //RETORNA TODAS AS MARCAÇÕES QUE NÃO FORAM FINALIZADAS CASO N TENHA SIDO PASSADO A QUERY E AS FINALIZADAS CASO PASSE
        const appointment = await model.find().or({finished : status})

        return appointment
    }

    public async getById(id : string) : Promise<void>{

        // RETORNA UMA MARCAÇÃO DE ACORDO COM O ID
        const getId = await model.findOne({'_id' : id})

        return getId
    }

    public async finishMarking(id : string) : Promise<void>{

        // DE ACORDO COM O ID VAI ALTERAR A CONSULTA DE FALSE PARA TRUE, DIZENDO QUE FOI CONCLUIDA
        const finishMarking = await model.findByIdAndUpdate(id , {finished : true})

        return(finishMarking)
    }

    public async searchUser(search : string){
        const seekingOut = await model.find().or([{email : search} , {cpf : search}])

        return seekingOut
    }
}