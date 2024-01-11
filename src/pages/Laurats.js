import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AboutMeContainer from "../components/AboutMeContainer";
import SkillsContainer from "../components/SkillsContainer";
import styles from "./Laurats.module.css";


const Laurats = () => {
  const navigate = useNavigate();

 
  const onButtonContainer1Click = useCallback(() => {
    navigate("/Acceuil");
  }, [navigate]);

  return (
    <div className={styles.laurats}>
      <div className={styles.navigationC}>
        <div className={styles.sampleLogo} />
        
        <div className={styles.button} onClick={onButtonContainer1Click}>
          <div className={styles.buttonChild} />
          <div className={styles.logOut}>Log out</div>
        </div>
        <img
          className={styles.alumniLogoE14557455316861Icon}
          alt=""
          src="/alumnilogoe1455745531686-1@2x.png"
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
      </div>
      <img className={styles.image8Icon} alt="" src="/image-6@2x.png" />
      <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
      
      <AboutMeContainer />
      <div className={styles.personalInfo}>Personal Info</div>
      <div className={styles.experience}>Experience</div>
      <SkillsContainer />
      <div className={styles.iconLogoFacebookParent}>
        <img
          className={styles.iconLogoFacebook}
          alt=""
          src="/-icon-logo-facebook@2x.png"
        />
        <img
          className={styles.iconLogoInstagram}
          alt=""
          src="/-icon-logo-instagram@2x.png"
        />
        <img
          className={styles.iconLogoTwitter}
          alt=""
          src="/-icon-logo-twitter@2x.png"
        />
      </div>
      <div className={styles.chaimaeBenaouiParent}>
        <div className={styles.chaimaeBenaoui}>Chaimae Benaoui</div>
        <div className={styles.studentAtEcole}>
          Student at Ecole Normale Supérieur Rabat
        </div>
      </div>
    </div>
  );
};

export default Laurats;
