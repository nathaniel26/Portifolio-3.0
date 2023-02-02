import styles from "../Layout/NavBar.module.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import MenuMobile from "./MenuMobile";
function NavBar() {
  return (
    <nav className={styles.corpo}>
      <h1>NF</h1>
      <ul className={styles.menupcId}>
        <li>Inicio</li>
        <li>Habilidades</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>
      <div className={styles.redes}>
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
      </div>

      <MenuMobile></MenuMobile>
    </nav>
  );
}
export default NavBar;
