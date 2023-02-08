import "./form.css";
export function Formone() {
  return (
    <form className="form">
      <h2>Datos Personales</h2>
      <div className="form-box">
        <label>Nombre</label>
        <input id="nombre" name="nombre" type="nombre" value="" />
        <label>Apellido</label>
        <input id="apellido" name="apellido" type="apellido" value="" />
        <label>Fecha de nacimiento</label>
        <input id="nacimiento" name="nacimiento" type="nacimiento" value="" />
        <label>Correo</label>
        <input id="correo" name="correo" type="correo" value="" />
        <div></div>
        <div>
          <input type="radio" value="Male" name="genero" /> Hombre
          <input type="radio" value="Female" name="genero" /> Mujer
        </div>
      </div>
      <button type="submit">Siguiente</button>
    </form>
  );
}
