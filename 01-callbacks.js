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

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// };

// doMath(2, 4, function (x, y) {
//     return x + y;
// });

// doMath(10, 6, function (x, y) {
//     return x - y;
// });

/*
 * Відкладений виклик: регістрація подій
 */
const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//     console.log('Клік по кнопці');
// };

// buttonRef.addEventListener('click', function () {
//     console.log('Клік по кнопці');// інлайн
// });

// console.dir(buttonRef);
/*

 * Відкладений виклик: геолокація
 */

const onGetPositionSuccess = function (position) {
    console.log('Це виклик функції onGetPositionSuccess');

    console.log(position);
};

const onGetPositionError = function (error) {
    console.log('Це виклик функції onGetPositionError');

    console.log(error);
};

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// );

/*
 * Відкладений виклик: інтервали
 */
// const callback = function () {
//     console.log('Через три секунди в середені колбека в таймауті');
// };

// setTimeout(callback, 3000);
// console.log('В коді перед таймаутом');

// console.log('В коді після таймаута');
