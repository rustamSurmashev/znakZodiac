import {calcZodiac} from "../js/lib.js";

test ('should check zodiac', () => {
    const month = '12';
    const day = 30;
    const result = calcZodiac(month, day);
    expect(result).toBe('Козерог');
});
