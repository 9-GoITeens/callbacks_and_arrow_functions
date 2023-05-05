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

    const innerFunction = function () {
        console.log('Это вызов innerFunction');
    };

    return innerFunction;
};

/*
 * Поварёнок
 */
const makeDish = function (sheffName, dish) {
    console.log(`${sheffName} готовит ${dish}`);
};

// makeDish('Mango', 'пиріжок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлети');
// makeDish('Poly', 'суп');
// makeDish('Poly', 'кава');

const makeSheff = function (name) {};

// const mango = makeSheff('Mango');
// const poly = makeSheff('Poly');

/*
 * Округлятор 🤷‍♂️
 */

/*
 * Приватні дані і функції - приховані реалізації, інтерфейс
 */
