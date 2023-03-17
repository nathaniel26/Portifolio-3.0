import styles from "../Componentes/Corpo.module.css";
import Inicio from "./ConteudosCorpo/Inicio";
import Habilidades from "./ConteudosCorpo/Habilidades";
import Projetos from '../Componentes/ConteudosCorpo/Projetos'
import Contato from "./ConteudosCorpo/Contato";
import foto from "../Imgs/div.png";
function Corpo() {
  return (
    <div className={styles.corpo}>
      <h1>Corpo</h1>
      <Inicio></Inicio>
      <img className={styles.divisao} src={foto} alt="divisão"></img>
      <Habilidades></Habilidades>
      <img className={styles.divisao} src={foto} alt="divisão"></img>
      <Projetos></Projetos>
      <img className={styles.divisao} src={foto} alt="divisão"></img>
      <Contato></Contato>

    </div>
  );
}
export default Corpo;
