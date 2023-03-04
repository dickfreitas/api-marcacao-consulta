import app from "./app";
import mongoose from "mongoose";
import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


// AQUI CONECTA A APLICAÇÃO AO BANCO DE DADOS MONGODB
const mongo = mongoose.connect(`${process.env.BANCO_DADOS}`)
.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => console.log(err));