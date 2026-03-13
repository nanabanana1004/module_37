// Задание 6.1: Палиндром
const word = "Довод";
const cleanWord = word.toLowerCase().replace(/\s/g, '');
const isPalindrome = cleanWord === cleanWord.split('').reverse().join('');
console.log(`Слово ${word} ${isPalindrome ? 'является' : 'не является'} палиндромом`);

// Задание 6.2: Уникальные значения
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know'];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

// Задание 6.3: Массив от 0 до N
const n = 5; // Для проверки в консоли GitHub/Node.js
const numbers = Array.from({ length: n + 1 }, (_, i) => i);
console.log(numbers);

// Задание 6.4: Крестики-нолики
for (let i = 0; i < 3; i++) {
    let row = "";
    for (let j = 0; j < 3; j++) {
        row += (i + j) % 2 === 0 ? "x " : "o ";
    }
    console.log(row.trim());
}

// Задание 6.5: Сбор значений объекта
const obj = { some: 'some', dom: 'text', arr: [1, 2, 3, 4, 5], tom: 'there' };
const arrValues = [];
Object.values(obj).forEach(val => Array.isArray(val) ? arrValues.push(...val) : arrValues.push(val));
console.log(arrValues);
