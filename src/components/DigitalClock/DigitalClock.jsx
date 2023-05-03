import styles from './DigitalClock.module.css';

const formatTime = (date, is24Hours = false) => {
  const hours = date.getHours(),
    minutes = date.getMinutes();

  if (is24Hours) {
    return {
      hours: hours < 10 ? `0${hours}` : hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      amPm: false,
    };
  } else {
    let newHours = hours % 12;
    newHours = newHours ? newHours : 12;
    return {
      hours: newHours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      amPm: hours >= 12 ? 'pm' : 'am',
    };
  }
};

const DigitalClock = ({currentTime, is24Hours}) => {

  const time = formatTime(currentTime, is24Hours);
  return (
    <div className={styles.digitalContainer}>
      <span className={styles.digitalNumbers}>{time.hours}</span><span className={styles.timer}>:</span><span className={styles.digitalNumbers}>{time.minutes}</span>{time.amPm ? <span className={styles.amPm}>{time.amPm}</span> : ''}
    </div>
  );
};

export default DigitalClock;
