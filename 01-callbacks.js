/*
 * Функція зворотнього виклику (callback)
 * - Функція може приймати інші функції як параметри
 * - Функція яка передається іншій функції як аргумент називається
 *   «функцією зворотнього (відкладеного) виклику» (callback-функція)
 * - Функція яка приймає іншу функцію як параметр
 *   або повертає функцію як результат соєї роботи називається
 *   «функцією вищого порядку»
 */

// const fnA = function (message, callback) {
//     console.log(message);
//     callback(1000);
//     // console.log(callback);
// };

// const fnB = function (numer) {
//     console.log('Це консольлог функції fnB', numer);
// };

// fnA('string', fnB);

/*
 * функция doMath(a, b, callback)
 */

const doMath = function (a, b, callback) {
    const result = callback(a, b);

    console.log(result);
};

doMath(2, 4, function (x, y) {
    return x + y;
});

doMath(10, 6, function (x, y) {
    return x - y;
});

/*
 * Відкладений виклик: регістрація подій
 */
// const buttonRef = document.querySelector('.js-button');
/*

 * Відкладений виклик: геолокація
 */

// window.navigator.geolocation.getCurrentPosition();
/*
 * Відкладений виклик: інтервали
 */

// console.log('В коді перед таймаутом');
// console.log('Через три секунди в середені колбека в таймауті');
// console.log('В коді після таймаута');
