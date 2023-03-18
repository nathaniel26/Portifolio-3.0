import styles from "./Habilidades.module.css";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiJavascript,
  SiPython,
  SiAdobephotoshop,
  SiKotlin,
  SiReact,
} from "react-icons/si";
import { GiAirBalloon } from "react-icons/gi";
import { DiPhotoshop, DiUnitySmall } from "react-icons/di";
import { FaJava } from "react-icons/fa";

function Habilidades() {
  return (
    <div className={styles.container}>
      <h1 id="habilidades">Habilidades</h1>

      {/*-------------Web---------------*/}
      <div className={styles.icons}>
        <div className={styles.icons_item}>
          <AiFillHtml5 />
          <p>Html5</p>
        </div>
        <div className={styles.icons_item}>
          <SiCss3 />
          <p>Css3</p>
        </div>
        <div className={styles.icons_item}>
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div className={styles.icons_item}>
          <SiReact />
          <p>ReactJs</p>
        </div>
      </div>

      <div className={styles.icons}>
        <div className={styles.icons_item}>
          <SiPython />
          <p>Python</p>
        </div>
        <div className={styles.icons_item}>
          <FaJava />
          <p>Java</p>
        </div>
        <div className={styles.icons_item}>
          <SiKotlin />
          <p>Kotlin</p>
        </div>
        <div className={styles.icons_item}>
          <DiUnitySmall />
          <p>Unity/C++</p>
        </div>
      </div>

      <div className={styles.icons}>
        <div className={styles.icons_item}>
          <DiPhotoshop />
          <p>PhotoShop</p>
        </div>
        <div className={styles.icons_item}>
          <GiAirBalloon />
          <p>CorelDraw</p>
        </div>
      </div>

      {/*-------------Mobile---------------*/}
      <div className={styles.icons_mobile}>
        <div className={styles.icons_item}>
          <AiFillHtml5 />
          <p>Html5</p>
        </div>
        <div className={styles.icons_item}>
          <SiCss3 />
          <p>Css3</p>
        </div>
        <div className={styles.icons_item}>
          <SiJavascript />
          <p>JavaScript</p>
        </div>
      </div>

      <div className={styles.icons_mobile}>
        <div className={styles.icons_item}>
          <SiReact />
          <p>ReactJs</p>
        </div>
        <div className={styles.icons_item}>
          <SiPython />
          <p>Python</p>
        </div>
        <div className={styles.icons_item}>
          <FaJava />
          <p>Java</p>
        </div>
      </div>

      <div className={styles.icons_mobile}>
        <div className={styles.icons_item}>
          <SiKotlin />
          <p>Kotlin</p>
        </div>
        <div className={styles.icons_item}>
          <DiUnitySmall />
          <p>Unity/C++</p>
        </div>
        <div className={styles.icons_item}>
          <DiPhotoshop />
          <p>PhotoShop</p>
        </div>
      </div>

      <div className={styles.icons_mobile}>
        <div className={styles.icons_item}>
          <GiAirBalloon />
          <p>CorelDraw</p>
        </div>
      </div>
      
    </div>
  );
}
export default Habilidades;
