const obj = { some: 'some', dom: 'text', arr: [1, 2, 3, 4, 5], tom: 'there' };
const arrValues = [];

Object.values(obj).forEach(val => {
    if (Array.isArray(val)) {
        arrValues.push(...val);
    } else {
        arrValues.push(val);
    }
});

console.log(arrValues);
