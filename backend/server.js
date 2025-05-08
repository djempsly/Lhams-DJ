const express = require("express");
const cors = require("cors");
const path = require("path");
const productosRoutes = require("./routes/productos");

const app = express();
app.use(cors());
app.use(express.json());

// Servir imágenes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Rutas
app.use("/api/productos", productosRoutes);

// Iniciar servidor
app.listen(3001, () => console.log("Servidor backend en http://localhost:3001"));
