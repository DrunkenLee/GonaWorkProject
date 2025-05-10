import LandingHero from '../components/LandingHero';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/products" className={styles.navLink}>Products</Link>
          <Link href="/portfolio" className={styles.navLink}>Portfolio</Link>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
      </header>
      <main className={styles.main}>
        <LandingHero />
        <section>
          <h2>Why GonaWork Project?</h2>
          <ul>
            <li>✔️ Streamline your digital projects</li>
            <li>✔️ Fully customize digital products</li>
            <li>✔️ Guaranteed support</li>
            <li>✔️ Secure and reliable platform</li>
          </ul>
        </section>
        <section style={{ marginTop: 40 }}>
          <h2>Our Services</h2>
          <p>
            Discover our digital solutions to boost your business.{' '}
            <Link href="/products" className={styles.primary}>
              View Products &rarr;
            </Link>
          </p>
        </section>
        <section id="contact" style={{ marginTop: 40 }}>
          <h2>Contact Us</h2>
          <p>
            <a
              href="https://wa.me/62895412227149"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', fontWeight: 600 }}
            >
              <img
                src="/whatsapp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
                style={{ verticalAlign: 'middle' }}
              />
              Chat me on WhatsApp
            </a>
          </p>
        </section>
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} GonaWork Project. All rights reserved.
      </footer>
    </div>
  );
}
