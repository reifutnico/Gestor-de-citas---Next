export default function Contacto() {
    return (
      <div className="contacto">
        <h1>Contacto</h1>
        <form>
          <div className="datos">
            <div className="name">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="email">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div> 
          <div className="mensaje">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
  