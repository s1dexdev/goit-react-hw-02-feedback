import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={styles.boxBtn}>
      <button
        className={styles.btnGood}
        type="button"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className={styles.btnNeutral}
        type="button"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button className={styles.btnBad} type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
