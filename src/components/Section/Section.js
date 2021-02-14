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

export default Section;
