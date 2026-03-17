const word = "Довод";
const cleanWord = word.toLowerCase().replace(/\s/g, '');
const isPalindrome = cleanWord === cleanWord.split('').reverse().join('');

console.log(`Слово ${word} ${isPalindrome ? 'является' : 'не является'} палиндромом`);
