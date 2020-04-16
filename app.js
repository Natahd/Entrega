// Inicializar la librería
const app = express();
app.use(express.json());

// Endpoint
/**
 * URI's  disponibles en el API
 */
app.get("/", (req, res) => {
  res.send("Bienvenido a la API simulador");
});
// IMPORTAR las rutas con los endpoints especificos
const rutas_simulador = require("./routes/simulador");
app.use(rutas_simulador);




// Puerto
const port = 3000;
// Levantar el servidor para escuchar los puertos
app.listen(port, () => {
  console.log(`Escuchando API en http://localhost:${port}`);
});