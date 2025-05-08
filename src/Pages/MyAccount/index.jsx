
  function MyAccount() {
    const [imagen, setImagen] = useState(null);
    const [mensaje, setMensaje] = useState("");
  
    const handleChange = (e) => {
      const file = e.target.files[0];
      if (file && ["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
        setImagen(file);
      } else {
        setMensaje("");
      }
    };
  
    const handleUpload = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("foto", imagen);
  
      const res = await fetch("/api/subir-foto", {
        method: "POST",
        body: formData,
      });
  
      const data = await res.json();
      setMensaje(data.mensaje || data.error);
    };
  
    return (
      <form onSubmit={handleUpload}>
        <input type="file" accept=".jpg,.jpeg,.png" onChange={handleChange} />
        <button type="submit">Subir Foto</button>
        <p>{mensaje}</p>
      </form>
    );
  }

  export default { MyAccount }
  