import Link from 'next/link';
import styles from '../page.module.css';

const portfolioItems = [
  {
    title: 'Zona Merah Projects (Game Server Development)',
    description: 'A game server development project for Zona Merah.',
    link: 'https://www.battlemetrics.com/servers/zomboid/32856747',
  },
  {
    title: 'AHA Karaoke (Karaoke App)',
    description: 'A karaoke application for Desktop and android.',
  },
];

export default function PortfolioPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Our Portfolio</h1>
        <ul>
          {portfolioItems.map((item) => (
            <li key={item.title} style={{ marginBottom: 24 }}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primary}
                  style={{ display: 'inline-block', marginTop: 8 }}
                >
                  Visit Project &rarr;
                </a>
              )}
            </li>
          ))}
        </ul>
        <Link href="/" className={styles.primary}>
          &larr; Back to Home
        </Link>
      </main>
    </div>
  );
}