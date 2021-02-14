import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options }) => {
  return (
    <div className={styles.boxBtn}>
      <button className={styles.btnGood} type="button" onClick={options}>
        Good
      </button>
      <button className={styles.btnNeutral} type="button" onClick={options}>
        Neutral
      </button>
      <button className={styles.btnBad} type="button" onClick={options}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
