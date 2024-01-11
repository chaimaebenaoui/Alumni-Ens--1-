import styles from "./SkillsContainer.module.css";

const SkillsContainer = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <b className={styles.hireMe}>Hire Me</b>
      <img className={styles.frameItem} alt="" src="/group-1@2x.png" />
      <img className={styles.frameInner} alt="" src="/group-1@2x.png" />
      <img className={styles.groupIcon} alt="" src="/group-1@2x.png" />
      <img className={styles.frameChild1} alt="" src="/group-4@2x.png" />
      <div className={styles.figmaDesignerWrapper}>
        <div className={styles.figmaDesigner}>Figma Designer</div>
      </div>
      <div className={styles.graphicDesignerWrapper}>
        <div className={styles.figmaDesigner}>Graphic Designer</div>
      </div>
      <div className={styles.frontEndDeveloperWrapper}>
        <div className={styles.figmaDesigner}>Front end Developer</div>
      </div>
      <div className={styles.administrativeManagerWrapper}>
        <div
          className={styles.administrativeManager}
        >administration management trainee </div>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.frameChild2} />
      <div className={styles.frameChild3} />
      <img className={styles.frameChild4} alt="" src="/group-5@2x.png" />
      <div className={styles.javaDeveloperWrapper}>
        <div className={styles.javaDeveloper}>Java Developer</div>
      </div>
      <div className={styles.videoEditorWrapper}>
        <div className={styles.videoEditor}>Video Editor</div>
      </div>
      <b className={styles.skills}>Skills</b>
    </div>
  );
};

export default SkillsContainer;
