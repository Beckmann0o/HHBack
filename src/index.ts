import App from "./app";

const main = async () => {
  try {
    const app = new App();
    app.start();
  } catch (error) {
    console.error("Error en la aplicación", error);
  }
};

main();
