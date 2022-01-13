import Button from "./Button";
import styles from "./Button.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome</h1>
      <Button text={"btn"} />
    </div>
  );
}

export default App;
