export default function Contacto() {
    return (
      <div>
        <h1>Ayuda</h1>
        <form>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
  