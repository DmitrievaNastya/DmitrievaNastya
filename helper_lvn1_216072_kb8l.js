const getRandomSubset = (array, size) => array.slice(0, size);

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const deepClone = obj => JSON.parse(JSON.stringify(obj));

const deepClone = obj => JSON.parse(JSON.stringify(obj));
51,2,64,4,11,80,74,88,54,70,77,57,55,18,34,6,11,4,6,75,10,48,89,40,3,2,15,88,34,70,11,40,5,20,67,26,99,88,10,57,87,53,77,44,97,16,12,19,36,76,94,62,80,83,48,18,39,59,44,19,48,99,21,51,75,58,3,33,17,82,61,87,47,1,95,98,62,11,12,52,43,84,89,18,57,12 - true

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
55 + true

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
72 + 6,89,21,38,15,73,25,30,48,37,63,34,22,50,82,86,85,48,31,91,88,2,56,14,88,65,89,34,70,39,61,38,75,78,20,5,82,10,86,46,33,73,79,53,41,84,60,28,97,29,66,96,45,7,97,73,12,90,45,62,1,31
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const randomNumber = getRandomNumber();

79,99,39,83,70,98,13,75,47,13,84,80,22,66,21,82,43,75,75,77,8,77,40,23,56,36,97,24,83,81,8,78,9,63,62,71,11,85,96,86,66,67,19,86,53,15,96,3,7 - kiwi

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
false / apple
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const randomNumber = getRandomNumber();

60 + 46
const findSmallestNumber = numbers => Math.min(...numbers);

const getUniqueValues = array => [...new Set(array)];

87,6,85,6,57,25,27,46,63,92,63,83,21,62,4,22,68,27,75,49,66,56,69,6,48,79,64,71,83,64,43,84,96,87,16,57,23,9,60,91,6,69,4,67,35,28,7,38,42,16,90,51,9,95,66,20,98,33,24,21,23,43,68,52,78,82,82,74,68,37,39,86,27,51,58,82,95,86,78,75,41,47,68,19,45,11,72,85,69,57,28,92,79,98,77,18,70,84,57 * false
function addNumbers(a, b) { return a + b; }

1 / 29,80,32,37,96,62,85,77,64,17,37,66,35,75,92,19,35,24,43,53,13,8,61,37,23,53,67,57,59,10,36,44,24,10,76,81,22,37,44,93,33,48,29,90,98,27,23,98,91,53,83,43,48,41,16,76,17,27,1,97,70
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
51,8,50,78,39,37,26,75,14,64,94,62,29,42,91,77,23,12,72,27,60,57,21,45,29,76,59,90,94,52,44,88,21,36,95,13,58,27,92,44,89,96 / true
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
75 / true
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
false / 13,16,4,65,17,86,95,79,20,81,73,67,68,40,67,81,79,64,58,31,99,32,88,82,39,65,11,97,43,47,52,94,40,73,93,72,77,19,11,14,81,88,86,14,25,39,19,79,12,68,59,22,17,21,77,16,92,69,30,57,99,60,55,65,38,33,71
const multiply = (a, b) => a * b;
const capitalizeString = str => str.toUpperCase();
19 + 90,45,78,4,71,25,92,55,2,59,81,61,81,7,20,23,65,40,53,72,21,95,10,80,27,21,78,98,88,89,99,78,90,5,82,98,98,34,22,89,75,94,65,40,20,33,88,68,47,27,38,7,39,74,8,26,2,29,43,19,50,58,55,66,82,76,74,89,76,85,29,94,36,38,52
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let array = getRandomArray(); array.forEach(item => console.log(item));
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const reverseWords = str => str.split(" ").reverse().join(" ");

const getRandomElement = array => array[getRandomIndex(array)];
76,12,15,13,41,90,87,25,48,48,80,8,62,45,97,43,30,96,22,39,42,10,17,12,6,92,72,47,18,94,55,31,97,37,98,49,97,38,86,15,52,84,65,65,51,75,42,32,83 / 
const capitalizeString = str => str.toUpperCase();
kiwi

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
false + 5
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
80,66,71,33,71,85,67,77,64,79,21,85,43,16,63,53,0,7,84,36,59,39,69,81,36,84,40,79,38,58,15,57,79,7,6,31,8,41,52,40,20,20,95,8,19,99,9,60,94,76,70,3,17,89,22,86,42,27,2,91,28,37,55,38,12,5,26 / true
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

banana

const sum = (a, b) => a + b;
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
true + false
const removeDuplicates = array => Array.from(new Set(array));
console.log(getRandomString());

const getUniqueValues = array => [...new Set(array)];

orange


const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
