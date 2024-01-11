import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Regiter.module.css";

const Regiter = () => {
  const [containerDefault1Value, setContainerDefault1Value] = useState("");
  const [containerDefault2Value, setContainerDefault2Value] = useState("");
  const [containerDefault3Value, setContainerDefault3Value] = useState("");
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/Acceuil");
  }, [navigate]);

  return (
    <div className={styles.regiter}>
      <div className={styles.navigationC}>
        <div className={styles.sampleLogo} />
        <div className={styles.button} onClick={onButtonContainerClick}>
          <div className={styles.buttonChild} />
          <div className={styles.logIn}>Log in</div>
        </div>
        <img
          className={styles.alumniLogoE14557455316861Icon}
          alt=""
          src="/alumnilogoe1455745531686-1@2x.png"
        />
      </div>
      <div className={styles.button1} onClick={onButtonContainer1Click}>
        <form className={styles.buttonItem} />
        <div className={styles.register}>Register</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
      </div>
      <TextField
        className={styles.containerDefault}
        color="primary"
        sx={{ width: 218 }}
        variant="outlined"
      />
      <input
        className={styles.containerDefault1}
        type="email"
        value={containerDefault1Value}
        onChange={(event) => setContainerDefault1Value(event.target.value)}
      />
      <input
        className={styles.containerDefault2}
        type="password"
        value={containerDefault2Value}
        onChange={(event) => setContainerDefault2Value(event.target.value)}
      />
      <input
        className={styles.containerDefault3}
        type="password"
        value={containerDefault3Value}
        onChange={(event) => setContainerDefault3Value(event.target.value)}
      />
      <div className={styles.labelCheckHelperText}>
        <div className={styles.labelCheck}>
          <div className={styles.check}>
            <img
              className={styles.iconsSuccess}
              alt=""
              src="/icons--success@2x.svg"
            />
          </div>
          <div className={styles.name}>Name</div>
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
          <div className={styles.name}>{`Last Name `}</div>
        </div>
        <div className={styles.helperText}>Helper text</div>
      </div>
      <div className={styles.labelCheckHelperText2}>
        <div className={styles.labelCheck2}>
          <div className={styles.check}>
            <img
              className={styles.iconsSuccess}
              alt=""
              src="/icons--success@2x.svg"
            />
          </div>
          <div className={styles.name}>Email</div>
        </div>
        <div className={styles.helperText}>Helper text</div>
      </div>
      <div className={styles.labelCheckHelperText3}>
        <div className={styles.labelCheck2}>
          <div className={styles.check}>
            <img
              className={styles.iconsSuccess}
              alt=""
              src="/icons--success@2x.svg"
            />
          </div>
          <div className={styles.name}>Password</div>
        </div>
        <div className={styles.helperText}>Helper text</div>
      </div>
      <div className={styles.labelCheckHelperText4}>
        <div className={styles.labelCheck2}>
          <div className={styles.check}>
            <img
              className={styles.iconsSuccess}
              alt=""
              src="/icons--success@2x.svg"
            />
          </div>
          <div className={styles.name}>confirmation</div>
        </div>
        <div className={styles.helperText}>Helper text</div>
      </div>
      <img className={styles.alumni1Icon} alt="" src="/alumni-1@2x.png" />

      <b className={styles.registration}>Registration</b>
      <img className={styles.image9Icon} alt="" src="/image-6@2x.png" />
      <button className={styles.forgotPassword}>Forgot password ?</button>
      <TextField
        className={styles.containerDefault4}
        color="primary"
        sx={{ width: 218 }}
        variant="outlined"
      />
    </div>
  );
};

export default Regiter;
