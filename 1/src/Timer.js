import React, { useState, useEffect } from 'react';

const Timer = () => {
  // Состояние для отслеживания времени
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false); // Состояние для старта/стопа
  const [intervalId, setIntervalId] = useState(null); // Для хранения id setInterval

  // Функция обновления времени
  const updateTime = () => {
    setTime(prevTime => {
      let { hours, minutes, seconds } = prevTime;
      seconds += 1;

      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }

      if (minutes === 60) {
        minutes = 0;
        hours += 1;
      }

      return { hours, minutes, seconds };
    });
  };

  // useEffect для управления таймером
  useEffect(() => {
    if (isRunning) {
      const id = setInterval(updateTime, 1000); // Обновляем каждую секунду
      setIntervalId(id);
      return () => clearInterval(id); // Очистка таймера при размонтировании или изменении isRunning
    } else {
      clearInterval(intervalId); // Останавливаем таймер при остановке
    }
  }, [isRunning]);

  // Функция для старта/остановки таймера
  const toggleTimer = () => {
    setIsRunning(prev => !prev);
  };

  // Функция для сброса времени
  const resetTimer = () => {
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    setIsRunning(false); // Останавливаем таймер
  };

  return (
    <div style={styles.container}>
      <div style={styles.timeDisplay}>
        <span>{String(time.hours).padStart(2, '0')}</span>:
        <span>{String(time.minutes).padStart(2, '0')}</span>:
        <span>{String(time.seconds).padStart(2, '0')}</span>
      </div>
      <div style={styles.buttons}>
        <button style={styles.button} onClick={toggleTimer}>
          {isRunning ? 'Стоп' : 'Старт'}
        </button>
        {(time.hours > 0 || time.minutes > 0 || time.seconds > 0) && (
          <button style={styles.button} onClick={resetTimer}>Сброс</button>
        )}
      </div>
    </div>
  );
};

// Стили
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
  },
  timeDisplay: {
    fontSize: '48px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    transition: 'background-color 0.3s',
  },
};

export default Timer;
