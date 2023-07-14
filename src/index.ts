import App from "./app"
import connect from "./database";

const main = async () => {
    await connect();
    const app = new App();
    app.start();
};

main().catch((error) => {
    console.error("Error en la aplicación", error);
});
