import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CommunityContainer.module.css";

const CommunityContainer = () => {
  const [frameInputValue, setFrameInputValue] = useState("");
  const navigate = useNavigate();

  const onMyProfileTextClick = useCallback(() => {
    navigate("/laurats");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/forms");
  }, [navigate]);

  return (
    <div className={styles.navigationC}>
      <div className={styles.sampleLogo} />
      <div className={styles.community}>Community</div>
      <img
        className={styles.alumniLogoE14557455316861Icon}
        alt=""
        src="/alumnilogoe1455745531686-1@2x.png"
      />
      <div className={styles.myProfile} onClick={onMyProfileTextClick}>
        My profile
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <div className={styles.buttonChild} />
        <i className={styles.add}>Add</i>
      </div>
      <input
        className={styles.navigationCChild}
        placeholder="Search"
        type="search"
        value={frameInputValue}
        onChange={(event) => setFrameInputValue(event.target.value)}
      />
    </div>
  );
};

export default CommunityContainer;
