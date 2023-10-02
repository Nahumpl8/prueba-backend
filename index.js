const express = require("express")
const cors = require("cors")
const {colores} = require("./db.js")

let puerto = process.env.PORT || 4000;

const servidor = express();

servidor.use(cors());

servidor.use("/prueba", express.static("./estaticos"))


servidor.get("/", (peticion, respuesta) => {
    let  [r,g,b] = [0,0,0].map(() => Math.floor(Math.random() * 256));

    respuesta.json({r,g,b})
})


servidor.get("/colores", async (peticion, respuesta) => {
    respuesta.json(await colores());
    console.log(respuesta)
})

//servidor.get("/crear", async (peticion, respuesta) => {
    //respuesta.json(await crearColor(134,144,233))
//})

servidor.use((peticion, respuesta) => {
    respuesta.status(404)
    respuestra.send("not found 🧸")
})

servidor.listen(puerto)