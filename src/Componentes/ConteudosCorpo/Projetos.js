/* eslint-disable jsx-a11y/anchor-has-content */
import styles from "./Projetos.module.css";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import img1 from "../../Imgs/geografia.png";
import img2 from "../../Imgs/koronga.jpg";
import img3 from "../../Imgs/maquina.png";

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
      <h1 id="projetos">Projetos</h1>

      <div className={styles.carrossel}>
        <div className={styles.flechaEsquerda} onClick={handleLeftArrow}>
          <AiOutlineArrowLeft />
        </div>
        {step === 1 && (
          <div className={styles.caixa}>
            <img src={img1} alt="aa"></img>
            <div className={styles.desc}>
              <h3>Geografia em jogos UFPel</h3>
              <p>
                O site do grupo de ensino, extensão e pesquisa do curso de
                Licenciatura em Geografia da Universidade Federal de Pelotas
                (UFPel) é a plataforma ideal para quem busca materiais de
                qualidade sobre ensino de geografia com jogos.
              </p>
              <h3>React js - Html - Css</h3>
              
              <h3>Site</h3>
              <a
                target="_blank"
                href="https://geografiaemjogosufpel.netlify.app/"
                rel="noreferrer"
              >Link</a>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.caixa}>
            <img src={img2} alt="aa"></img>
            <div className={styles.desc}>
              <h3>Fly Fly Koronga</h3>
              <p>
                Fly Fly Koronga é um jogo divertido no estilo Flappy Bird. Nele,
                o jogador precisa desviar da "vacina", o seu maior inimigo, e
                ganha pontos à medida que avança. Além disso, é possível
                escolher diferentes personagens para jogar. Experimente agora e
                desafie seus amigos!
              </p>
              <h3>C#/Unity</h3>
              <h3>Game - Android</h3>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.NFstudio.FlyFlyKoronga"
                rel="noreferrer"
              >Link</a>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.caixa}>
            <img src={img3} alt="aa"></img>
            <div className={styles.desc}>
              <h3>Homem vs Maquina</h3>
              <p>
                Você está pronto para enfrentar a máquina em 10 rodadas? O
                objetivo do jogo é marcar o máximo de pontos possível para se
                tornar o grande vencedor. Você tem três opções de jogada: pedra,
                papel ou tesoura. Mas cuidado! A máquina também é esperta e está
                pronta para te desafiar em cada rodada.
              </p>
              <h3>C#/Unity</h3>
              <h3>Game - Android</h3>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.NFstudio.HomemvsMaquina"
                rel="noreferrer"
              >Link</a>
            </div>
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
    </div>
  );
}
export default Projetos;
