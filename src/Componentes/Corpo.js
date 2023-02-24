import styles from '../Componentes/Corpo.module.css'
import Inicio from './ConteudosCorpo/Inicio'
import foto from '../Imgs/div.png'
function Corpo(){
    return <div className= {styles.corpo}>
        <h1>Corpo</h1>
        <Inicio></Inicio>
        <img className={styles.divisao} src={foto} alt="divisão"></img>
        <Inicio></Inicio>
        <img className={styles.divisao} src={foto} alt="divisão"></img>


        


    </div>
}
export default Corpo