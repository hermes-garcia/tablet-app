import styles from './AnalogClock.module.css';

function getTransform(rotation) {
  const angle = `rotate(${rotation}deg)`;
  return {
    transform: angle
  };
}

const AnalogClock = ({currentTime}) => {

  const hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
  const hourRotation = (hour + minute / 60) * 30;
  const minuteRotation = minute * 6;
  const secondRotation = second * 6;

  return (
    <div className={styles.analogClock}>
      <div className={styles.clockFace}>
        <div className={styles.hourHand} style={getTransform(hourRotation)} />
        <div className={styles.minuteHand} style={getTransform(minuteRotation)} />
        <div className={styles.secondHand} style={getTransform(secondRotation)} />
        <div className={styles.tickMark} />
      </div>
    </div>
  );
};

export default AnalogClock;
