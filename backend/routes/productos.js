const express = require("express");
const multer = require("multer");
const db = require("../db");

const router = express.Router();

// Configurar multer
const storage = multer.diskStorage({
  destination: "backend/uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const tipos = ["image/jpeg", "image/png", "image/jpg"];
  if (tipos.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Archivo no permitido"), false);
  }
};

const upload = multer({ storage, fileFilter });

// Ruta para insertar producto
router.post("/", upload.single("imagen"), async (req, res) => {
  const { nombre, descripcion, precio } = req.body;
  const imagen = req.file?.filename;

  try {
    const sql = "INSERT INTO productos (nombre, descripcion, precio, imagen) VALUES (?, ?, ?, ?)";
    await db.query(sql, [nombre, descripcion, precio, imagen]);
    res.json({ mensaje: "Producto insertado con éxito" });
  } catch (err) {
    res.status(500).json({ error: "Error al insertar producto" });
  }
});

module.exports = router;
