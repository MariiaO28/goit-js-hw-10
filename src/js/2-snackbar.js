'use strict';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('form');

function createPromise(delay, state) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                res(delay); 
            } else {
                rej(delay);
            }
        }, delay);
    });
}

function handleSubmit(event) {
    event.preventDefault();

    const delay = form.elements.delay.value;
    // console.log(delay);
    const state = form.elements.state.value;
    // console.log(state)

    createPromise(delay, state)
        .then((delay) => {
            iziToast.success({
                iconUrl: '../img/ok-icon.svg',
                message: `Fulfilled promise in ${delay}ms`,
                messageColor: '#FFFFFF',
                color: '#59A10D',
                close: false,
                position: 'topRight',
            });
        })
        .catch((delay) => {
            iziToast.error({
                iconUrl: '../img/icon.svg',
                message: `Rejected promise in ${delay}ms`,
                messageColor: '#FFFFFF',
                color: '#B51B1B',
                close: false,
                position: 'topRight',
            });
        })
    form.reset();
}

form.addEventListener("submit", handleSubmit);