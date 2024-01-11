import { useCallback } from "react";
import CommunityContainer from "../components/CommunityContainer";
import { useNavigate } from "react-router-dom";
import styles from "./Membres.module.css";

const Membres = () => {
  const navigate = useNavigate();

  const onFrameImageClick = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onFrameImage1Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onFrameImage2Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onFrameImage3Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onFrameImage4Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onFrameImage5Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onFrameImage6Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onFrameImage7Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onFrameImage8Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onFrameImage9Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onFrameImage10Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onFrameImage11Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onFrameImage12Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onFrameImage13Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onFrameImage14Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  const onFrameImage15Click = useCallback(() => {
    navigate("/card");
  }, [navigate]);

  return (
    <div className={styles.membres}>
      <CommunityContainer />
      <div className={styles.membresChild} />
      <img className={styles.image7Icon} alt="" src="/image-6@2x.png" />
      <img
        className={styles.membresItem}
        alt=""
        src="/frame-36@2x.png"
        onClick={onFrameImageClick}
      />
      <img
        className={styles.membresInner}
        alt=""
        src="/frame-40@2x.png"
        onClick={onFrameImage1Click}
      />
      <img
        className={styles.frameIcon}
        alt=""
        src="/frame-44@2x.png"
        onClick={onFrameImage2Click}
      />
      <img
        className={styles.membresChild1}
        alt=""
        src="/frame-48@2x.png"
        onClick={onFrameImage3Click}
      />
      <img
        className={styles.membresChild2}
        alt=""
        src="/frame-37@2x.png"
        onClick={onFrameImage4Click}
      />
      <img
        className={styles.membresChild3}
        alt=""
        src="/frame-41@2x.png"
        onClick={onFrameImage5Click}
      />
      <img
        className={styles.membresChild4}
        alt=""
        src="/frame-45@2x.png"
        onClick={onFrameImage6Click}
      />
      <img
        className={styles.membresChild5}
        alt=""
        src="/frame-49@2x.png"
        onClick={onFrameImage7Click}
      />
      <img
        className={styles.membresChild6}
        alt=""
        src="/frame-38@2x.png"
        onClick={onFrameImage8Click}
      />
      <img
        className={styles.membresChild7}
        alt=""
        src="/frame-42@2x.png"
        onClick={onFrameImage9Click}
      />
      <img
        className={styles.membresChild8}
        alt=""
        src="/frame-46@2x.png"
        onClick={onFrameImage10Click}
      />
      <img
        className={styles.membresChild9}
        alt=""
        src="/frame-50@2x.png"
        onClick={onFrameImage11Click}
      />
      <img
        className={styles.membresChild10}
        alt=""
        src="/frame-39@2x.png"
        onClick={onFrameImage12Click}
      />
      <img
        className={styles.membresChild11}
        alt=""
        src="/frame-43@2x.png"
        onClick={onFrameImage13Click}
      />
      <img
        className={styles.membresChild12}
        alt=""
        src="/frame-47@2x.png"
        onClick={onFrameImage14Click}
      />
      <img
        className={styles.membresChild13}
        alt=""
        src="/frame-51@2x.png"
        onClick={onFrameImage15Click}
      />
      <div className={styles.nameAbdulrhmanContainer}>
        <p className={styles.alumniCleInfo}>{`ALUMNI CLE INFO `}</p>
      </div>
    </div>
  );
};

export default Membres;
