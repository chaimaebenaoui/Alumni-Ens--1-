import Header from "../components/Header";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardChild} />
      
      <div className={styles.cardInner} />
      <div className={styles.spcialisation}>Spécialisation :</div>
      <div className={styles.anneDinscription}>Année d’inscription :</div>
      <div className={styles.anneDeDiplme}>Année de diplôme:</div>
      <div className={styles.nom}>Nom :</div>
      <div className={styles.ville}>Ville :</div>
      <div className={styles.adresseEMail}>Adresse e-mail :</div>
      <div className={styles.prenom}>Prenom :</div>
      <Header />
      <img className={styles.image7Icon} alt="" src="/image-6@2x.png" />
      <div className={styles.biographie}>Biographie :</div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-37@2x.png" />
    </div>
  );
};

export default Card;
