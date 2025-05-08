import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistroForm() {
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

   // Redirigir si ya hay token
   useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/myaccount");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, email, password, pais, telefono, genero } = e.target.elements;

    const res = await fetch("/api/registro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre.value,
        email: email.value,
        password: password.value,
        pais: pais.value,
        telefono: telefono.value,
        genero: genero.value,
      }),
    });

    const result = await res.json();
    setMensaje(result.mensaje || result.error);
  };

  return (
    <form className="top-10" onSubmit={handleSubmit}>
      <h2>Registro</h2>

      <input name="nombre" type="text" placeholder="Nombre completo" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Contraseña" required />

      <select name="pais" required>
        <option value="">Selecciona tu país</option>
        <option value="República Dominicana">República Dominicana</option>
        <option value="Haití">Haití</option>
        <option value="México">México</option>
        <option value="Estados Unidos">Estados Unidos</option>
        {/* Puedes agregar más países aquí */}
      </select>

      <input name="telefono" type="tel" placeholder="Teléfono" required />

      <div>
        <label>
          <input type="radio" name="genero" value="masculino" required />
          Masculino
        </label>
        <label>
          <input type="radio" name="genero" value="femenino" required />
          Femenino
        </label>
      </div>

      <button type="submit">Registrar</button>
      <p>{mensaje}</p>
    </form>
  );
}


