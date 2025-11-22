// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// ENTENDENDO O MÉTODO REDUCE PARA RESOLVER ESSE PROBLEMA

// O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// Looping comum

const numeros = [1, 2, 3, 4];

let soma = 0;

for (let index = 1; index < numeros.length; index++) {
  soma += numeros[index];
}

let total = soma;

console.log(total); // [1, 3, 6, 10]

// reduce

let totalReduce = numeros.reduce(function (
  acc,
  numeroAtual,
  index,
  arrayOriginal
) {
  return acc + numeroAtual;
},
0);

console.log(totalReduce);


