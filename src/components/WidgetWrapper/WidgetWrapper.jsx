import React from 'react';
import styles from './WidgetWrapper.module.css';
import ClockWidget from '../ClockWidget';
import CalendarWidget from '../CalendarWidget';
import MemorialInfoWidget from '../MemorialInfoWidget';
import WeatherWidget from '../WeatherWidget';
import DailyQuoteWidget from '../DailyQuoteWidget';
import SpotifyWidget from '../SpotifyWidget';

const WidgetWrapper = () => {
  return (
    <div className={styles.widgetWrapper}>
      <div className={styles.column}>
        <ClockWidget />
        {/*<div className={styles.item}>
          <CalendarWidget />
        </div>
        <div className={styles.item}>
          <MemorialInfoWidget />
        </div>*/}
      </div>
      <div className={styles.column}>
        <div className={styles.item}>
          <WeatherWidget />
        </div>
        <div className={styles.item}>
          <DailyQuoteWidget />
        </div>
        <div className={styles.item}>
          <SpotifyWidget />
        </div>
      </div>
    </div>
  );
};

export default WidgetWrapper;
