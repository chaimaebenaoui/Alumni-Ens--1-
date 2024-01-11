import { useMemo } from "react";
import styles from "./MainHeader.module.css";

const MainHeader = ({
  buttonText,
  actionButtonText,
  buttonLeft,
  rectangleDivLeft,
  logOutBackgroundColor,
  logOutBorder,
  logOutBoxSizing,
  alumniLogoE14557455316861Left,
  alumniLogoE14557455316861Color,
  onButtonContainerClick,
  onButtonContainer1Click,
}) => {
  const logOutStyle = useMemo(() => {
    return {
      left: buttonLeft,
    };
  }, [buttonLeft]);

  const buttonStyle = useMemo(() => {
    return {
      left: rectangleDivLeft,
    };
  }, [rectangleDivLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: logOutBackgroundColor,
      border: logOutBorder,
      boxSizing: logOutBoxSizing,
    };
  }, [logOutBackgroundColor, logOutBorder, logOutBoxSizing]);

  const logOut1Style = useMemo(() => {
    return {
      left: alumniLogoE14557455316861Left,
      color: alumniLogoE14557455316861Color,
    };
  }, [alumniLogoE14557455316861Left, alumniLogoE14557455316861Color]);

  return (
    <div className={styles.navigationC}>
      <div className={styles.sampleLogo} />
      <div className={styles.button} onClick={onButtonContainerClick}>
        <div className={styles.buttonChild} />
        <div className={styles.logOut} style={logOutStyle}>
          {buttonText}
        </div>
      </div>
      <div
        className={styles.button}
        onClick={onButtonContainer1Click}
        style={buttonStyle}
      >
        <div className={styles.buttonChild} style={rectangleDivStyle} />
        <div className={styles.logOut} style={logOut1Style}>
          {actionButtonText}
        </div>
      </div>
      <img
        className={styles.alumniLogoE14557455316861Icon}
        alt=""
        src="/alumnilogoe1455745531686-1@2x.png"
      />
    </div>
  );
};

export default MainHeader;
