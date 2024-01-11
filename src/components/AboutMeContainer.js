import styles from "./AboutMeContainer.module.css";

const AboutMeContainer = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <b className={styles.aboutMe}>About Me</b>
      <div className={styles.frameItem} />
      <b className={styles.contactHere}>Contact Here</b>
      <div className={styles.phone0608095269}>phone : 0608095269</div>
      <div className={styles.emailChaimaebenaoui123gmai}>
        Email : chaimaebenaoui123@gmail.com
      </div>
      <div className={styles.adressStreet}>
        Adress : Street 2, house #05, Motarway Route Road Islamabad, Salé
      </div>
      <div className={styles.iAmChaimae}>
        I am Chaimae Benaoui, I am 20 years old, I am a student at Ecole Normale
        Supérieur Rabat, specializing in Teaching Secondary-Computer Science, I
        hold a study diploma general academic.
      </div>
    </div>
  );
};

export default AboutMeContainer;
