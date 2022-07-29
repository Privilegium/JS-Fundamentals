'use strict';

const timerDisplay = document.querySelector('.timer__display'),
      circleDisplay = document.querySelector('.circle__timing'),
      startBtn = document.querySelector('.start'),
      stopBtn = document.querySelector('.stop'),
      circleBtn = document.querySelector('.circle'),
      pauseBtn = document.querySelector('.pause');

startBtn.addEventListener('click', () => {
    const startTime = new Date();
    // setInterval(getTimerTime(startTime), 100);
    setInterval(() => {
        const now = new Date(),
        result = Math.abs(Date.parse(startTime) - Date.parse(now)),
        min = Math.floor(result / (1000 * 60) % 60),
        sec = Math.floor(result / 1000 % 60),
        mlsec = result % 100;
    
        timerDisplay.innerHTML = `${min}:${sec}:${mlsec}`;
    }, 1);
});

