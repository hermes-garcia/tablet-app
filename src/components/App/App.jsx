import styles from './App.module.css';
import WidgetWrapper from '../WidgetWrapper';
const App = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>icons</header>
      <WidgetWrapper />
      <footer className={styles.footer}>footer config</footer>
    </div>
  );

};

export default App;
