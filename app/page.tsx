import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Quizzes for all!</p>
      </div>

      <div className={styles.greeting}>
        <Image
          priority
          src="/images/flower.png"
          className={styles.logo}
          height={64}
          width={79}
          alt="flower icon"
        />
        <h1>Welcome to Quizness</h1>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <Link href="/lists">
            <h2>
              Study Spelling Lists <span>-&gt;</span>
            </h2>
          </Link>
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
          <Link href="/quizzes">
            <h2>
              Spelling Quizzes <span>-&gt;</span>
            </h2>
          </Link>
          <p>How well do you spell?</p>
        </div>

        <div className={styles.card}>
          <h2>
            Get to know your friends <span>-&gt;</span>
          </h2>
          <p>
            How well do you really know your friends? How well do they really
            know you?
          </p>
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
