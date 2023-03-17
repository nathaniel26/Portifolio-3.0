import styles from "./Projetos.module.css";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import img1 from "../../Imgs/fotoo.png"
import img2 from "../../Imgs/tete.png"

function Projetos() {
  const [step, setStep] = useState(1);

  const handleLeftArrow = () => {
    if (step === 1) {
      setStep(3);
    } else {
      setStep(step - 1);
    }
  };

  const handleRightArrow = () => {
    if (step === 3) {
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };

  const goToSlide1 = () => {
    setStep(1);
  };

  const goToSlide2 = () => {
    setStep(2);
  };

  const goToSlide3 = () => {
    setStep(3);
  };

  return (
    <div className={styles.corpo}>
      <h1>Projetos</h1>

      <div className={styles.carrossel}>
        <div className={styles.flechaEsquerda} onClick={handleLeftArrow}>
          <AiOutlineArrowLeft />
        </div>
        {step === 1 && (
          <div className={styles.caixa}>
            <img src={img1} alt="aa"></img>
            <p>Slide 1</p>
          </div>
        )}

        {step === 2 && (
          <div className={styles.caixa}>
            <img src={img2} alt="aa"></img>
            <p>Slide 2</p>
          </div>
        )}

        {step === 3 && (
          <div className={styles.caixa}>
            <img src={img1} alt="aa"></img>
            <p>Slide 3</p>
          </div>
        )}
        <div className={styles.flechaDireita} onClick={handleRightArrow}>
          <AiOutlineArrowRight />
        </div>
      </div>

      <div>
        {step === 1 && (
          <>
            <div className="indicator active"></div>
            <div className="indicator" onClick={goToSlide2}></div>
            <div className="indicator" onClick={goToSlide3}></div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="indicator" onClick={goToSlide1}></div>
            <div className="indicator active"></div>
            <div className="indicator" onClick={goToSlide3}></div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="indicator" onClick={goToSlide1}></div>
            <div className="indicator" onClick={goToSlide2}></div>
            <div className="indicator active"></div>
          </>
        )}
      </div>
      <h1>.</h1>
    </div>
  );
}
export default Projetos;
