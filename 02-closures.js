/*
 * Функція результатом своєї роботи може повертати іншу функцію.
 *
 *  Функція яка повертається під час виклику буде мати доступ
 * до усіх локальних змінних (області видимості)
 * батьківської функції (тієї з якої її повернули),
 * це називається «замикання».
 */

const fnA = function (parameter) {
    const innerVariable = 'значення внутрішньої змінної функції fnA';
};

/*
 * Ресторан
 */

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готує ${dish}`);
// };

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
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

//
