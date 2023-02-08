import "./form.css";
export function Formone() {
  return (
    <form className="form">
      <h2>Datos Personales</h2>
      <div className="form-box">
        <label htmlFor="Nombre">Nombre</label>
        <input id="nombre" name="nombre" type="nombre" value="" />
        <label htmlFor="apellido">Apellido</label>
        <input id="apellido" name="apellido" type="apellido" value="" />
        <label htmlFor="nacimiento">Fecha de nacimiento</label>
        <input id="nacimiento" name="nacimiento" type="nacimiento" value="" />
        <label htmlFor="correo">Correo</label>
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
