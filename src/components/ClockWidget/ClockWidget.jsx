import React from 'react';
import DigitalClock from '../DigitalClock';
import AnalogClock from '../AnalogClock';

import styles from './ClockWidget.module.css';

const TYPE_ANALOG = 'analog';
const TYPE_DIGITAL = 'digital';

const ClockWidget = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const [clockType, setClockType] = React.useState(TYPE_DIGITAL); //analog | digital
  const [is24Hours, setIs24Hours] = React.useState(false);

  React.useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className={styles.clockWrapper}>
      {
        clockType === TYPE_ANALOG ?
          <AnalogClock currentTime={currentTime} />
          : <DigitalClock currentTime={currentTime} is24Hours={is24Hours} />
      }
    </div>
  );
};

export default ClockWidget;
