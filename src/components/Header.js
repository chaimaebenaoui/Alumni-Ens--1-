import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const onCommunityTextClick = useCallback(() => {
    navigate("/membres");
  }, [navigate]);

  const onMyProfileTextClick = useCallback(() => {
    navigate("/laurats");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/forms");
  }, [navigate]);

  return (
    <div className={styles.navigationC}>
      <div className={styles.sampleLogo} />
      <div className={styles.community} onClick={onCommunityTextClick}>
        Community
      </div>
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
    </div>
  );
};

export default Header;
