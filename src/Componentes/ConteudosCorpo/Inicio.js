import styles from "./Inicio.module.css";
import foto from "../../Imgs/fotoo.png";
import { motion } from "framer-motion";
function Inicio() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.desc}
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0, rotate: [-360, 0] }}
        transition={{ duration: 2.5 }}
      >
        <h1 id="inicio">Ola!</h1>
        <h2>
          Sou o
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0, 1] }}
            transition={{ duration: 3 }}
          >
            {" "}
            Nathaniel Farias.
          </motion.span>
        </h2>

        <br></br>
        <p>
          Entusiasta por tecnologia e jogos. Atualmente, estou estudando para me
          tornar um desenvolvedor web, mobile e de games. Busco novas
          oportunidades para crescer profissionalmente e criar soluções
          inovadoras.
        </p>
        <br></br>
        <p>
          Estou animado para trabalhar em projetos desafiadores e inovadores e
          contribuir com minhas habilidades e conhecimentos para o sucesso do
          seu projeto.
        </p>
      </motion.div>
      <div className={styles.foto}>
        <motion.img
          src={foto}
          alt="Minha Foto"
          initial={{ opacity: 0, x: +500 }}
          animate={{ opacity: 1, x: 0, rotate: [360, 0] }}
          transition={{ duration: 2.5 }}
        ></motion.img>
      </div>
    </div>
  );
}
export default Inicio;
