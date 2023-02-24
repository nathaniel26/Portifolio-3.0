import styles from "./Inicio.module.css";
import foto from "../../Imgs/fotoo.png";
import { motion } from "framer-motion";
function Inicio() {
  return (
    <div className={styles.container}>
      <motion.div className={styles.desc}
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1,  x: 0, rotate: [-360, 0]}}
      transition={{ duration: 2.5 }}
      
      >
        <h1>Ola!</h1>
        <h2>
          Sou o<motion.span
          initial={{ opacity: 0}}
          animate={{ opacity: [ 0, 0 , 0 ,1]}}
          transition={{ duration: 4 }}
          > Nathaniel Farias.</motion.span>
        </h2>

        <p>Sou apaixonado por tecnlogias e games.</p>
        <p>
          Atualmente estou estudando para ser desenvolvedor web, mobile e
          desenvolvedor de games.
        </p>
      </motion.div>
      <div className={styles.foto}>
        <motion.img
          src={foto}
          alt="Minha Foto"
          initial={{ opacity: 0, x: +500 }}
          animate={{ opacity: 1,  x: 0, rotate: [360, 0] }}
          transition={{ duration: 2.5 }}
        ></motion.img>
      </div>
    </div>
  );
}
export default Inicio;
