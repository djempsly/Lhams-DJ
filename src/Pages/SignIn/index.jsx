import { useState } from "react";

export default function LoginForm() {
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    const result = await res.json();
    if (result.usuario) {
      localStorage.setItem("usuario", JSON.stringify(result.usuario));
      setMensaje("Inicio de sesión exitoso");
    } else {
      setMensaje(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Entrar</button>
      <p>{mensaje}</p>
    </form>
  );
}
