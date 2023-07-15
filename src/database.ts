import { createConnections, ConnectionOptions } from "typeorm";

const connect = async () => {
  try {
    const connectionOptions: ConnectionOptions[] = [
      {
        type: "mongodb",
        url: "mongodb+srv://healthhub:bWgXUBTijCdLNy0v@healthub-cluster.mgqxpnt.mongodb.net/?retryWrites=true&w=majority",
        useUnifiedTopology: true,
        useNewUrlParser: true,
        synchronize: true,
        logging: true,
        entities: [
          // Agrega aquí tus entidades
        ],
      },
    ];

    const connections = await createConnections(connectionOptions);

    console.log("Conexiones exitosas a MongoDB Atlas");

    // Realizar operaciones de base de datos utilizando TypeORM

  } catch (error) {
    console.error("Error al conectar a MongoDB Atlas", error);
  }
};

export default connect;
