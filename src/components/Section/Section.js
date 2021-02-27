import PropTypes from "prop-types";

import styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Section;
