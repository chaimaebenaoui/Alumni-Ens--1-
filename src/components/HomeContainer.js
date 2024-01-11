import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeContainer.module.css";

const HomeContainer = () => {
  const [rectangleInputValue, setRectangleInputValue] = useState("");
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/regiter");
  }, [navigate]);

  return (
    <div className={styles.navigationC}>
      <div className={styles.sampleLogo} />
      <div className={styles.button} onClick={onButtonContainerClick}>
        <input
          className={styles.buttonChild}
          type="text"
          value={rectangleInputValue}
          onChange={(event) => setRectangleInputValue(event.target.value)}
        />
        <div className={styles.register}>Register</div>
      </div>
      <div className={styles.home}>Home</div>
      <div className={styles.blog}>Blog</div>
      <div className={styles.contact}>Contact</div>
      <img
        className={styles.alumniLogoE14557455316861Icon}
        alt=""
        src="/alumnilogoe1455745531686-1@2x.png"
      />
    </div>
  );
};

export default HomeContainer;
