/*
 * Функція результатом своєї роботи може повертати іншу функцію.
 *
 *  Функція яка повертається під час виклику буде мати доступ
 * до усіх локальних змінних (області видимості)
 * батьківської функції (тієї з якої її повернули),
 * це називається «замикання».
 */

// const fnA = function (parameter) {
//     // const innerVariable = 'значення внутрішньої змінної функції fnA';

//     const innerfanction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('Це виклик innerfanction');
//     };

//     return innerfanction;
// };

// const fnB = fnA(100);
// fnB();
// console.log(fnB);

/*
 * Ресторан
 */

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готує ${dish}`);
// };

// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готує ${dish}`);
//     };

//     return makeDish;
// };

// const leo = makeSheff('Leo');
// // console.log(leo);
// console.dir(leo);

// const mery = makeSheff('Mery');
// // console.log(mery);
// console.dir(mery);

// leo('котлети');
// leo('пиріжки');
// leo('фреш');

// mery('суп');

// makeDish('Leo', 'піцу');
// makeDish('Leo', 'торт');
// makeDish('Leo', 'фреш');

// makeDish('Mery', 'котлети');
// makeDish('Mery', 'суп');
// makeDish('Mery', 'кава');

// const leo = makeSheff('Leo');
// const mery = makeSheff('Mery');

/*
 * Округлятор 🤷‍♂️
 */
// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.45

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// const number = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
// };

// const number1 = number(2);
// console.dir(number1);

// const number2 = number(3);

// console.log(number1(3.45678));
// console.log(number1(37.45678));
// console.log(number1(377.4567778));

// console.log(number2(3.45678));
// console.log(number2(37.67));
// console.log(number2(77.4778));
