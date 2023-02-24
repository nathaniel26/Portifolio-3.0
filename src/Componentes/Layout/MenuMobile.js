import styles from "./MenuMobile.module.css";
import { Component } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

class MenuMobile extends Component {
  state = { clicou: false };
  clique = () => {
    this.setState({ clicou: !this.state.clicou });
  };
  render() {
    return (
      <div className={this.state.clicou ? styles.menu : styles.menuds}>
        <div className={styles.menumobileId} onClick={this.clique}>
          {this.state.clicou ? <HiX /> : <HiMenu />}
        </div>

        {this.state.clicou ? (
          <motion.div
            className={styles.mob}
            initial={{ height: 50 }}
            animate={{ height: 200 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              Inicio
            </motion.h1>

            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              Habilidades
            </motion.h1>

            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              Projetos
            </motion.h1>

            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              Contato
            </motion.h1>

            <motion.div
              className={styles.redes}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/nathanielfarias26"
              >
                <BsFacebook></BsFacebook>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/nathaniel_farias/"
              >
                <BsInstagram></BsInstagram>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/nathaniel-farias-562736240/"
              >
                <BsLinkedin></BsLinkedin>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/nathaniel26"
              >
                <BsGithub></BsGithub>
              </a>
            </motion.div>
          </motion.div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default MenuMobile;
