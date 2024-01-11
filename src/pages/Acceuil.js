import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Acceuil.module.css";

const Acceuil = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/regiter");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.acceuil}>
      <div className={styles.acceuilChild} />
      <div className={styles.acceuilItem} />
      <div className={styles.acceuilInner} />
      <b className={styles.chiffresCls}>Chiffres Clés</b>
      <b className={styles.contact}>Contact</b>
      <div className={styles.totalInscritsContainer}>
        <p className={styles.totalInscrits}>- Total inscrits : 1419</p>
        <p className={styles.totalInscrits}>- Diplômés : 415</p>
        <p className={styles.totalInscrits}>- Etudiants internationaux: 5</p>
        <p className={styles.totalInscrits}>- Nombre total de filières : 19</p>
        <p className={styles.totalInscrits}>- 7 Licences d’Education</p>
        <p className={styles.totalInscrits}>- 9 Licences professionnelles</p>
        <p className={styles.totalInscrits}>- 3 Masters</p>
      </div>
      <div className={styles.avenueDesNationsContainer}>
        <ul className={styles.avenueDesNationsUniesAgda}>
          <li className={styles.avenueDesNations}>
            Avenue des Nations Unies, Agdal, Rabat Maroc B.P:8007.N.U
          </li>
          <li className={styles.avenueDesNations}>Tél : 0537272755</li>
          <li className={styles.avenueDesNations}>Fax : 0537671401</li>
          <li className={styles.avenueDesNations}>
            E-mail: presidence@um5.ac.ma
          </li>
          <li>Webmaster: web@um5.ac.ma</li>
        </ul>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector-8@2x.png" />
      <img className={styles.acceuilChild1} alt="" src="/vector-8@2x.png" />
      <div className={styles.navigationC}>
        <div className={styles.sampleLogo} />
        <div className={styles.button} onClick={onButtonContainerClick}>
          <div className={styles.buttonChild} />
          <div className={styles.register}>Register</div>
        </div>
        <div className={styles.button1} onClick={onButtonContainer1Click}>
          <div className={styles.buttonItem} />
          <div className={styles.logIn}>Log in</div>
        </div>
        <img
          className={styles.alumniLogoE14557455316861Icon}
          alt=""
          src="/alumnilogoe1455745531686-1@2x.png"
        />
      </div>
      <img className={styles.alumni2Icon} alt="" src="/alumni-2@2x.png" />
      <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
      <div className={styles.ens}>ENS</div>
    </div>
  );
};

export default Acceuil;
