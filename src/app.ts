import express from 'express'
import "reflect-metadata"

class Application{
    app:express.Application;

    constructor(){
        this.app=express();
        console.log("anda")
    }

    start(){
        this.app.listen(3000, ()=>{
            console.log("Escuchando puerto 3000")
        })
    }
}

export default Application