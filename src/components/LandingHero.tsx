import styles from '../app/page.module.css';

export default function LandingHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>GonaWork Project</h1>
        <p className={styles.description}>
          Digital project services for seamless collaboration and productivity.<br />
          Empower your workflow with GonaWork.
        </p>
        <a href="#contact" className={styles.primary}>
          Get Started
        </a>
      </div>
    </section>
  );
}