import { useState, useCallback } from "react";
import HomeContainer from "../components/HomeContainer";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [containerDefaultValue, setContainerDefaultValue] = useState("");
  const [containerDefault1Value, setContainerDefault1Value] = useState("");
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/regiter");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <HomeContainer />
      <div className={styles.navigationC}>
        <div className={styles.sampleLogo} />
        <div className={styles.button} onClick={onButtonContainerClick}>
          <div className={styles.buttonChild} />
          <div className={styles.register}>Register</div>
        </div>
        <img
          className={styles.alumniLogoE14557455316861Icon}
          alt=""
          src="/alumnilogoe1455745531686-1@2x.png"
        />
      </div>
      <div className={styles.button1} onClick={onButtonContainer1Click}>
        <div className={styles.buttonChild} />
        <div className={styles.login1}>Login</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
      </div>
      <div className={styles.labelCheckHelperText}>
        <div className={styles.labelCheck}>
          <div className={styles.check}>
            <img
              className={styles.iconsSuccess}
              alt=""
              src="/icons--success@2x.svg"
            />
          </div>
          <div className={styles.email}>Email</div>
        </div>
        <div className={styles.helperText}>Helper text</div>
      </div>
      <div className={styles.labelCheckHelperText1}>
        <div className={styles.labelCheck}>
          <div className={styles.check}>
            <img
              className={styles.iconsSuccess}
              alt=""
              src="/icons--success@2x.svg"
            />
          </div>
          <div className={styles.email}>
            <p className={styles.password1}>Password</p>
          </div>
        </div>
        <div className={styles.helperText}>Helper text</div>
      </div>
      <img className={styles.alumni1Icon} alt="" src="/alumni-1@2x.png" />
      <b className={styles.login2}>Login</b>
      <img className={styles.image7Icon} alt="" src="/image-6@2x.png" />
      <input
        className={styles.containerDefault}
        type="email"
        value={containerDefaultValue}
        onChange={(event) => setContainerDefaultValue(event.target.value)}
      />
      <input
        className={styles.containerDefault1}
        type="password"
        value={containerDefault1Value}
        onChange={(event) => setContainerDefault1Value(event.target.value)}
      />
    </div>
  );
};

export default Login;
