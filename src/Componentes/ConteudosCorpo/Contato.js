import styles from "./Contato.module.css";
function Contato() {
  return (
    <div className={styles.corpo}>
      <h1>Contato</h1>
      <div className={styles.corpo}>
        <form
          action="https://formsubmit.co/nathaniel.farias@gmail.com"
          method="POST"
          className={styles.formulario}
          
        >
          <label for="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Digite seu nome aqui..."
          />
          <label for="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Digite seu email aqui..."
          />
          <label for="message">Mensagem</label>
          <textarea
            name="message"
            id="message"
            required
            placeholder="Digite sua mensagem aqui..."
          ></textarea>
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://nathanielfarias.netlify.app"
          />
          <button id="bt-enviar" type="submit">
            Enviar
          </button>
        </form>
        <div className={styles.espaco}></div>
      </div>
    </div>
  );
}
export default Contato;
