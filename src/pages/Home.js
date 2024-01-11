import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/membres");
  }, [navigate]);

  const onMyProfileTextClick = useCallback(() => {
    navigate("/laurats");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/forms");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.homeChild} />
      <img
        className={styles.homeItem}
        alt=""
        src="/rectangle-24@2x.png"
        onClick={onRectangle1Click}
      />
      <div className={styles.bienvenu}>Bienvenu !</div>
      <img className={styles.homeInner} alt="" src="/vector-8@2x.png" />
      <img className={styles.vectorIcon} alt="" src="/vector-8@2x.png" />
      <img className={styles.alumni2Icon} alt="" src="/alumni-2@2x.png" />
      <div className={styles.ens}>ENS</div>
      <div className={styles.navigationC}>
        <div className={styles.sampleLogo} />
        <div className={styles.home1}>Home</div>
        <div className={styles.myProfile} onClick={onMyProfileTextClick}>
          My profile
        </div>
        <img
          className={styles.alumniLogoE14557455316861Icon}
          alt=""
          src="/alumnilogoe1455745531686-1@2x.png"
        />
        <img className={styles.image7Icon} alt="" src="/image-6@2x.png" />
        <img
          className={styles.homeDuotoneIcon}
          alt=""
          src="/home-duotone@2x.png"
        />
      </div>
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-25@2x.png"
        onClick={onRectangle2Click}
      />
      <div className={styles.membres}>Membres</div>
      <div className={styles.button}>
        <div className={styles.forms}>forms</div>
      </div>
    </div>
  );
};

export default Home;
