import Link from 'next/link';
import styles from '../page.module.css';

const products = [
  {
    name: 'Digital Project Management',
    description: 'Organize, track, and deliver your projects efficiently.',
  },
  {
    name: 'Game Server Development',
    description: 'Realize your gaming vision with our server and management solutions.',
  },
  {
    name: 'Website Development',
    description: 'Build and maintain your online presence with ease.',
  },
];

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Our Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.name} style={{ marginBottom: 24 }}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
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