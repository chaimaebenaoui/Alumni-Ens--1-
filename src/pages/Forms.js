import { useState, useCallback } from "react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./Forms.module.css";

const Forms = () => {
  const [frameInputValue, setFrameInputValue] = useState("");
  const [frameInput1Value, setFrameInput1Value] = useState("");
  const [frameInput2Value, setFrameInput2Value] = useState("");
  const [frameInput3Value, setFrameInput3Value] = useState("");
  const [frameInput4Value, setFrameInput4Value] = useState("");
  const [frameInput5Value, setFrameInput5Value] = useState("");
  const [frameInput6Value, setFrameInput6Value] = useState("");
  const [frameInput7Value, setFrameInput7Value] = useState("");
  const [frameInput8Value, setFrameInput8Value] = useState("");
  const [frameInput9Value, setFrameInput9Value] = useState("");
  const [frameInput10Value, setFrameInput10Value] = useState("");
  const [frameInput11Value, setFrameInput11Value] = useState("");
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onMyProfileTextClick = useCallback(() => {
    navigate("/laurats");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/membres");
  }, [navigate]);

  return (
    <div className={styles.forms}>
      <div className={styles.navigationC}>
        <div className={styles.sampleLogo} />
        <div className={styles.home} onClick={onHomeTextClick}>
          Home
        </div>
        <div className={styles.community}>Community</div>
        <img
          className={styles.alumniLogoE14557455316861Icon}
          alt=""
          src="/alumnilogoe1455745531686-1@2x.png"
        />
        <div className={styles.myProfile} onClick={onMyProfileTextClick}>
          My profile
        </div>
        <img
          className={styles.homeDuotoneIcon}
          alt=""
          src="/home-duotone@2x.png"
        />
      </div>
      <div className={styles.formsChild} />
      <img className={styles.image7Icon} alt="" src="/image-6@2x.png" />
      <div className={styles.footer} />
      <input
        className={styles.formsItem}
        placeholder="Search"
        type="search"
        value={frameInputValue}
        onChange={(event) => setFrameInputValue(event.target.value)}
      />
      <div className={styles.formulaireDinscription}>
        Formulaire d’inscription
      </div>
      <img className={styles.formsInner} alt="" src="/ellipse-67@2x.png" />
      <input
        className={styles.frameInput}
        autoFocus={true}
        disabled={true}
        readOnly={true}
        type="file"
      />
      <div className={styles.nom}>
        <span>{`Nom `}</span>
        <span className={styles.span}>*</span>
      </div>
      <div className={styles.profilsLinkedin}>Profils LinkedIn</div>
      <div className={styles.titreDuPoste}>Titre du poste actuel</div>
      <div className={styles.spcialisation}>
        <span>Spécialisation</span>
        <span className={styles.span}>*</span>
        <span>{` `}</span>
      </div>
      <div className={styles.anneDinscription}>
        <span>Année d’inscription</span>
        <span className={styles.span}>*</span>
        <span>{` `}</span>
      </div>
      <div className={styles.anneDeDiplmeContainer}>
        <span>Année de diplôme</span>
        <span className={styles.span3}>*</span>
      </div>
      <div className={styles.adresseEMail}>
        <span>Adresse e-mail</span>
        <span className={styles.span3}>*</span>
      </div>
      <div className={styles.ville}>
        <span>Ville</span>
        <span className={styles.span}>*</span>
      </div>
      <div className={styles.dateNaissance}>
        <span>Date naissance</span>
        <span className={styles.span3}>*</span>
      </div>
      <div className={styles.genre}>
        <span>{`Genre `}</span>
        <span className={styles.span3}>*</span>
      </div>
      <div className={styles.prnom}>
        <span>Prénom</span>
        <span className={styles.span}>*</span>
      </div>
      <input
        className={styles.formsChild1}
        type="text"
        value={frameInput1Value}
        onChange={(event) => setFrameInput1Value(event.target.value)}
      />
      <input
        className={styles.formsChild2}
        type="text"
        value={frameInput2Value}
        onChange={(event) => setFrameInput2Value(event.target.value)}
      />
      <input
        className={styles.formsChild3}
        type="date"
        value={frameInput3Value}
        onChange={(event) => setFrameInput3Value(event.target.value)}
      />
      <input
        className={styles.formsChild4}
        type="text"
        value={frameInput4Value}
        onChange={(event) => setFrameInput4Value(event.target.value)}
      />
      <input
        className={styles.formsChild5}
        type="text"
        value={frameInput5Value}
        onChange={(event) => setFrameInput5Value(event.target.value)}
      />
      <input
        className={styles.formsChild6}
        type="text"
        value={frameInput6Value}
        onChange={(event) => setFrameInput6Value(event.target.value)}
      />
      <input
        className={styles.formsChild7}
        type="text"
        value={frameInput7Value}
        onChange={(event) => setFrameInput7Value(event.target.value)}
      />
      <input
        className={styles.formsChild8}
        placeholder="@um5.ac.ma"
        type="text"
        value={frameInput8Value}
        onChange={(event) => setFrameInput8Value(event.target.value)}
      />
      <input
        className={styles.formsChild9}
        type="text"
        value={frameInput9Value}
        onChange={(event) => setFrameInput9Value(event.target.value)}
      />
      <input
        className={styles.formsChild10}
        placeholder="jj/mm/aaaa"
        type="date"
        value={frameInput10Value}
        onChange={(event) => setFrameInput10Value(event.target.value)}
      />
      <div className={styles.femelle}>Femelle</div>
      <div className={styles.male}>Male</div>
      <RadioGroup className={styles.wrapper}>
        <Radio />
      </RadioGroup>
      <RadioGroup className={styles.container}>
        <Radio />
      </RadioGroup>
      <div className={styles.annulerWrapper} onClick={onFrameContainerClick}>
        <div className={styles.annuler}>Annuler</div>
      </div>
      <div className={styles.sinscrireWrapper} onClick={onFrameContainer1Click}>
        <div className={styles.sinscrire}>s'inscrire</div>
      </div>
      <div className={styles.biographie}>Biographie</div>
      <input
        className={styles.formsChild11}
        type="text"
        value={frameInput11Value}
        onChange={(event) => setFrameInput11Value(event.target.value)}
      />
    </div>
  );
};

export default Forms;
