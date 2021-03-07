export default function randomGenerator(start, end) {
    return Math.floor((Math.random() * end) + start);
}


export function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++)
        max = max < array[i] ? array[i] : max;
    return max;
}

export const initArraySize=20;
export const minArraySize=5;
export const maxArraySize=100;
export const minElement=10;
export const maxElement=450;
export const maxSpeed=200;
export const minSpeed=1;
export const initSpeed=150;
export const initColor = 'turquoise';
export const changeColor= 'red';

