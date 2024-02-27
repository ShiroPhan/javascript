//joining arrays
const odd = [1,3,5];
const nums = [2,4,6].concat(odd);

//cloning arrays
const arr = [1,2,3,4];
const arr2 = arr.slice()

//joining arrays
const odd = [1,3,5];
const nums = [2,4,6,...odd];

//cloning arrays
const arr = [1,2,3,4];
const arr2 = [...arr];

const odd = [1,3,5];
const nums = [2,...odd,4,6];
