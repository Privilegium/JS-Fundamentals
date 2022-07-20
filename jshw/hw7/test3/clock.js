'use strict';

window.addEventListener('DOMContentLoaded', () => {

    function setClock() {
        const hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds');
        
        setInterval(refreshTime, 1000);

        refreshTime();

        function refreshTime() {
            const now = new Date();

            hours.innerHTML = showZero(now.getHours());
            minutes.innerHTML = showZero(now.getMinutes());
            seconds.innerHTML = showZero(now.getSeconds());
        }
    }   
    setClock();

    function showZero(num) {
        if (num < 10 && num >= 0) {
            return `0${num}`;
        } else {
            return num;
        }
    }
});