const express = require('express');
const axios = require('axios');
const uuid = require('uuid')
const enviar_email = require('./email.js');
const app = express();
app.use(express.static('static'));



//hay que enviar el correo
app.get('/email', async(req, res) => {
    const destinatarios = req.query.destinatarios;
    const asunto = req.query.asunto;
    const contenido = req.query.contenido;

//generamos el id
    const id = uuid.v4();

//llamada a axios
    let divisa = await axios.get("https://mindicador.cl/api");
    divisa = divisa.data
    const dolar=divisa.dolar.valor
    const euro=divisa.euro.valor
    const uf=divisa.uf.valor
    const utm = divisa.utm.valor

    const cuerpo = `
        ${contenido}

        El valor del dolar hoy es $${dolar}
        El valor del euro hoy es E${euro}
        El valor del uf hoy es $${uf}
        El valor del utm hoy es $${utm}
    `

   // aca va tu codigo
    res.send({id,destinatarios, asunto, cuerpo });
})
app.listen(3000, () => {
    console.log("servidor corriendo en el puerto 3000")
})

async function createfile(id, contendo) {
    const namefile = destinatarios / $(id).txt;
    fs.writefile(namefile.contenido,
        'utf-8',
        function () {
            console.log("archivo creado")
        }
    )
}







