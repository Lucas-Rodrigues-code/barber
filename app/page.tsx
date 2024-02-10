import styles from "./page.module.css";
import HomePage from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Location from "./components/Location";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
      <About />
      <Service />
      <Location />
    </main>
  );
}
