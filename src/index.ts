import App from "./app";
import connect from "./database";

const main = async () => {
  try {
    await connect(); // Establecer la conexión a la base de datos

    const app = new App();
    app.start();

    console.log("La conexión a la base de datos se estableció exitosamente");

  } catch (error) {
    console.error("Error en la aplicación", error);
  }
};

main();
