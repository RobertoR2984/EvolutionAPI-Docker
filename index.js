require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

// Sirve archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Ruta "/manager" que muestra lo mismo que "/"
app.get("/manager", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Configura el puerto y levanta el servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});

