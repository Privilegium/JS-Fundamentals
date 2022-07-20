'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const modal = document.querySelector('.modal'),
          openModal = document.querySelector('#myBtn'),
          closeModal = document.querySelector('.modal-close');

    function openModalWindow() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        modal.style.overflow = 'hidden';
    }

    function closeModalWindow() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        modal.style.overflow = 'visible';
    }

    openModal.addEventListener('click', openModalWindow);
    closeModal.addEventListener('click', closeModalWindow);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalWindow();
        }
    });
    window.addEventListener('keydown', (e) => {
        if (e.code == 'Escape') {
            closeModalWindow();
        }
    });

});