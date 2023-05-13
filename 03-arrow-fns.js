/*
 * Стрілкові функції
 * - Оголошення
 * - Явне і неявне повернення
 * - Аргументи
 * - Неявне повернення обєкта
 */

// const add = function (a, b, c) {
//     console.log(a, b, c);

//     return a + b + c;
// };

// const addArrow = (a, b, c) => { // якщо параметрів більше двох
//     console.log(a, b, c);

//     return a + b + c;
// };

// const addArrow = n => { // якщо параметр один
//     console.log(a, b, c);

//     return a + b + c;
// };

// const addArrow = () => { //якщо параметрів немає
//     console.log(a, b, c);

//     return a + b + c;
// };

// const addArrow = (a, b, c) => a + b + c;

// const add = function (a, b, c) {
//     console.log(arguments);

//     return a + b + c;
// };

// const add = (...args) => {
//     console.log(args);

//     // return a + b + c;
// };

// const fnA = function () {
//     return {
//         a: 5,
//     };
// };

// const fnA = () => ({ a: 5 });

// console.log(fnA());

// console.log(add(5, 20, 4));
// console.log(addArrow(50, 2, 40));

const onGetPositionSuccess = position => {
    console.log('Це виклик функції onGetPositionSuccess');

    console.log(position);
};

const onGetPositionError = error => {
    console.log('Це виклик функції onGetPositionError');

    console.log(error);
};

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// );
