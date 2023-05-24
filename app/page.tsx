// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Quizzes for all!</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>
            Study Spelling Lists <span>-&gt;</span>
          </h2>
          <p>Check out this week&apos;s words.</p>
        </div>

        <div className={styles.card}>
          <h2>
            Word Scramblers <span>-&gt;</span>
          </h2>
          <p>
            Unscramble the letters to form words. Then unscramble the words to
            create sentences!
          </p>
        </div>

        <div className={styles.card}>
          <h2>
            Spelling Quizzes <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </div>

        {/* <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
      </div>
    </main>
  );
}
