import styles from "./page.module.css";
import HomePage from "./components/Home";
import About from "./components/About";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
      <About />
    </main>
  );
}
