'use strict';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import icon from '../img/icon.svg'
import iconOk from '../img/ok-icon.svg'

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
                iconUrl: iconOk,
                message: `Fulfilled promise in ${delay}ms`,
                messageColor: '#FFFFFF',
                color: '#59A10D',
                close: false,
                position: 'topRight',
            });
        })
        .catch((delay) => {
            iziToast.error({
                iconUrl: icon,
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