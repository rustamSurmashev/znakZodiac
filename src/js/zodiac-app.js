import {calcZodiac} from "./zodiac.js";

const monthEl = document.getElementById('month');
const dayEl = document.getElementById('day');
const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result');

calculateEl.addEventListener('click', function () {
    const month = monthEl.value;
    const day = dayEl.value;

    resultEl.textContent = calcZodiac(month, day);

});