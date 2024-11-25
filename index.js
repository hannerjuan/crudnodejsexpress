const express=require("express");
const constants=require("./lib/constants");
const bodyParser = require('body-parser')
const app = express();

// Importar rutas
const encuestaRoutes = require('./routes/encuestaRoutes');
const securityRouter=require("./routes/securityRouter");
const usuarioRoutes = require('./routes/usuarioRoutes');
const preguntaRoutes = require('./routes/preguntaRoutes');
const paginaRoutes = require("./routes/paginaRoutes");
const temaRoutes = require("./routes/temaRoutes");
const muestraRoutes = require("./routes/muestraRoutes");
const respuestaRoutes = require("./routes/respuestaRoutes");


app.use(express.json());




// Usar rutas
app.use('/encuestas', encuestaRoutes);
app.use('/preguntas', preguntaRoutes);
app.use('/usuarios', usuarioRoutes);
app.use("/paginas", paginaRoutes);
app.use("/temas", temaRoutes);
app.use("/muestras", muestraRoutes);
app.use("/respuestas", respuestaRoutes);




app.use('/login', securityRouter);


app.use('/',securityRouter);
app.listen(constants.PORT, () =>{
    console.log(`El servidor se esta ejecutando en http://localhost:${constants.PORT}/`);
});