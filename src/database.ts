import mongoose from "mongoose";

const connect = async () => {
  try {
    const url = "mongodb+srv://healthhub:bWgXUBTijCdLNy0v@healthub-cluster.mgqxpnt.mongodb.net/?retryWrites=true&w=majority";

    await mongoose.connect(url);

    const db = mongoose.connection;
    console.log("Conexión exitosa a MongoDB Atlas");

    // Verificar el estado de la conexión
    console.log("Estado de la conexión:", db.readyState);
    console.log("Base de datos conectada:", db.name);
  } catch (error) {
    console.error("Error al conectar a MongoDB Atlas", error);
  }
};

export default connect;  

                                                                                                                                                                                                                                    