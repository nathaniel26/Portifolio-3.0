import styles from "../Layout/NavBar.module.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import MenuMobile from "./MenuMobile";
import { Link } from "react-scroll";
function NavBar() {
  return (
    <nav className={styles.corpo}>
      <h1>NF</h1>
      <ul className={styles.menupcId}>
        <li><Link to="inicio" spy={true} smooth={true} offset={-300} duration={50}>Início</Link></li>
        <li><Link to="habilidades" spy={true} smooth={true} offset={-100} duration={50}>Habilidades</Link></li>
        <li><Link to="projetos" spy={true} smooth={true} offset={-100} duration={50}>Projetos</Link></li>
        <li><Link to="contato" spy={true} smooth={true} offset={-80} duration={50}>Contato</Link></li>
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
