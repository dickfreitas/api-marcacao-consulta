import mongoose from 'mongoose'

export const ConsultMigrations = new mongoose.Schema({
    name: String,
    email: String,
    description: String,
    cpf: String,
    date: String,
    time: String,
    finished: Boolean,
    notified: Boolean
})
