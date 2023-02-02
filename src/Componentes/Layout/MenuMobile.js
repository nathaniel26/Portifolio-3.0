import styles from "./MenuMobile.module.css";
import { Component } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

class MenuMobile extends Component {
  state = { clicou: false };
  clique = () => {
    this.setState({ clicou: !this.state.clicou });
  };
  render() {
    return (
      <div className={this.state.clicou ? styles.menu : styles.menuds}>
        <div id={styles.menumobileId} onClick={this.clique}>
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
              transition={{ duration: 2 }}
            >
              Teste
            </motion.h1>

            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              Teste
            </motion.h1>

            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              Teste
            </motion.h1>
            
          </motion.div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default MenuMobile;
