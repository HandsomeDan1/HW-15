'use strict';

// Пользователь вводит 3 рандомных числа.
// Создайте функцию которая записывает введенные числа в обьект.
// Далее напишите колбек функции которые будут высчитывать:
// остаток от деления первого числа и последнего;
// умножение всех 3х чисел друг на друга;
// деление всех 3х чисел друг на друга;
// вычитание всех 3х чисел друг от друга;
// сложение всех 3х чисел друг на друга;

const userInput0 = +prompt('Enter number:');
const userInput1 = +prompt('Enter number:');
const userInput2 = +prompt('Enter number:');

const task = (num0,num1,num2) => {
    const object = {
        num0,
        num1,
        num2
    };
    return `Остаток = ${callback0(object,'%')} Произведение = ${callback1(object,'*')} Деление = ${callback2(object,'/')} Сложение = ${callback3(object,'+')} Вычитание = ${callback4(object,'-')}`
};

const callback0 = (object) => {
    return object.num0 % object.num2
};

const callback1 = (object) => {
    return object.num0 * object.num1 * object.num2
};

const callback2 = (object) => {
    return object.num0 / object.num1 / object.num2
};

const callback3 = (object) => {
    return object.num0 + object.num1 + object.num2
};

const callback4 = (object) => {
    return object.num0 - object.num1 - object.num2
};

console.log(task(userInput0, userInput1, userInput2,callback0,callback1,callback2,callback3,callback4));