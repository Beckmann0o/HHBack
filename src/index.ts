import App from "./app";

const main = async () => {
  try {
    const app = new App();
    app.start(3000);
  } catch (error) {
    console.error("Error en la aplicación", error);
  }
};

main();
