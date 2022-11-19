# Assignment 1-Vinh Peters

## Problem 1

---

> Big O is a member of a family of notations invented by Paul Bachmann, Edmund Landau, and others, collectively called Bachmann–Landau notation or asymptotic notation. The letter O was chosen by Bachmann to stand for Ordnung, meaning the order of approximation.
> https://en.wikipedia.org/wiki/Big_O_notation

Big O notation is a way to describe the running time of an algorithm based on the magnitude of the number of operations , _n_. The order of magnitude _O_ is based on the worst case scenario for the size of _n_ for the algorithm. _O_ should reflect in the increase in _n_ as the input data increases in scale.

## Problem 2

---

### O(1)

Constant time\
Rank: 1\
The number of operations is constant irregardless of the input data size.\

Example:

```js
function isEvenOrOdd(n) {
  return n % 2 ? "Odd" : "Even";
}
```

### O(log(n))

Logarithmic Time\
Rank: 2\
The number of operations is related to the logarithm of the input size.  
Example:

```js
function foo(x) {
  while (x > 2) {
    x = x / 2;
    console.log(x);
  }
}
```

### O(n)

Linear Time\
Rank : 3\
The relationship between _n_ and the input data size is linear. The running time is a 1 to 1 correlation with the input data.\
Example:

```js
function findMax(arr) {
  let max = arr[i];
  for (const num in arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
```

### O(n<sup>2</sup>)

Quadratic Time\
Rank: 4\
The The relationship between _n_ and the input data size is quadratic. The magnitude of the running time is related to the square of the input size.\
Example:

```js
function outfits(pantsArr, shirtsArr) {
  let i = 0;
  for (const pants in pantsArr) {
    for (const shirt in shirtsArr) {
      console.log(`Outfit ${1}: ${shirt} & ${pants}`);
    }
  }
}
```

### O(n!)

Factorial Time\
Rank: 5\
The output is based on the factorial of the input. This often occurs when calculating combinations and permutations of arrays.

Example:

```js
/*  Find all permutations of a string.
    For string of length n, the number of permutations is n!
    For 'abc' all possible combinations are 3! = 6: 
    [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

*/

function findPermutations(str) {
  if (str.length === 0 || str.length < 2) {
    return str;
  }
  let permutationsArray = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (str.indexOf(char) != i) continue;

    let remainder = str.slice(0, i) + str.slice(i + 1, str.length);

    for (let permutation of findPermutations(remainder)) {
      permutationsArray.push(char + permutation);
    }
  }
  return permutationsArray;
}
```

## Problem 3

---

- Algorithms running on higher order O() running times will not scale well as input data structures grow.
- Shorter run times reduce server time costs.
- More performant code can still run on older hardware.

## Problem 4

---

Time based methods are dependent on the host architecture. The processor speed, RAM and other factors will produce different running times between machines. Even on the same machine, consecutive runs may not produce the same time. The performance of the code is also dependent on the size of the input. With Big O notation, the running time can be described independently of the input size.

## Problem 5

---

2 constant time operations + linear time for loop + linear time for loop + 2 nested linear for loops ==> O(1 + 1 + n + n + n \* n) ==> O(2+2n+n<sup>2</sup>)\
Consolidated ==> O(n<sup>2</sup>)

## Problem 6

---

1 constant time operation + 1 linear while loop + 3 nested linear for loops ==> O(1 + n + n\*n\*n) ==> O(1 + n + n<sup>3</sup>)\
Consolidated ==> O(n<sup>3</sup>)

## Problem 7

---

As the input data scales the higher order operations will become the dominant factors for the running. For O(1+n+n<sup>2</sup>) with _n_ = 10, we would have a total number of operations on the order of 10 + 10<sup>2</sup>= 110. The contribution from the linear portion is 10/110= 0.091 or 9.091%. If _n_ increases to 100, the number of operations become 100 + 100<sup>2</sup> = 10,100. The percentage from the linear portion is 100/(100+100<sup>2</sup> ==> 0.99%. As the input data increases , the contributions from the lower ordered operations become negligible.

## Problem 8

---

Space complexity is the total memory space used by the algorithm in relation to the input. Space complexity describes how the size of the output changes as the input scales.

## Problem 9

---

| Data Type | Space Complexity |
| --------- | ---------------- |
| Boolean   | Constant         |
| Undefined | Constant         |
| Null      | Constant         |
| Numbers   | Constant         |
| String    | Linear           |
| Array     | Linear           |
| Object    | Linear           |

## Problem 10

---

Arrays are more useful when the data should be ordered.
Accessing elements in arrays is faster than in objects.
Mixed data types are easier to handle in objects.
Add elements to objects don't require updating indices.

## Problem 11

---

| Method          | Time Complexity |
| --------------- | --------------- |
| inserting       | O(1)            |
| delete          | O(1)            |
| .hasOwnProperty | O(1)            |
| searching 2     | O(n)            |
| accessing       | O(1)            |
| .keys           | O(n)            |
| .values         | O(n)            |

## Problem 12

---

| Method      | Time Complexity |
| ----------- | --------------- |
| .push       | O(1)            |
| .unshift    | O(n)            |
| .pop        | O(1)            |
| .shift      | O(n)            |
| .find       | O(n)            |
| searching 2 | O(n)            |
| retrieving  | O(1)            |
| .map        | O(n)            |
| .splice     | O(n)            |
| .reduce     | O(n)            |
| method 4    | O(n)            |
| .join       | O(n)            |
| .reverse    | O(n)            |

## Problem 13

---

### #1

Time complexity: O(n)  
The algorithm is a linear search that iterates through each element in the array until it finds a certain value. The worst case for the number of operations is when that target value is the last item in the array and the max number of operations would be the length of the array, n.

Space complexity: O(1)  
The function will always return one element in the array.

### #2

Time complexity: O(n)  
The algorithm iterates through each item once in the array and pushes the index value to another array. The number of operations is equal to the length of the array.

Space complexity: O(n)  
The algorithm will return an array of the same length as the input array.

### #3

Time complexity: O(1)  
The algorithm compares the last element to the first element in the array. The worst case is that the first and last elements are equal, in which all 3 operations will run.

Space complexity: O(1)  
The algorithm will always return a single string irregardless of the size of the input array.

### #4

Time complexity: O(n)  
The algorithm iterates through each item once in the array and adds the value to a running sum. The number of operations is equal to the length of the array.

Space complexity: O(1)  
The function will always return 1 number no matter the input size of the array.

## #5

Time complexity: O(1)  
The algorithm performs a single mathematical calculation no matter the size of the input array.

Space complexity: O(1)  
The function will always return 1 number no matter the input size of the array.

## #6

Time complexity: O(log n)  
The algorithm performs a binary search on a sorted array. The algorithm does not have to iterate through every element in the array, the number of operations will be lower than the size of the array.

Space complexity: O(1)
The function will always return 1 element no matter the input size of the array.

## #7

Time complexity: O(n<sup>2</sup>)  
The algorithm iterates through the outer array and compares each value to each value in the inner array. The max number of operations is the product of the lengths of both arrays.

Space complexity: O(n)
The function will return an array of varying length with a max length of the product of the two array lengths.

## #8

Time complexity: O(n<sup>2</sup>)  
The algorithm performs a bubble sort, iterating through the array elements in an outer and inner loop. The algorithm will always complete both nested loops.

Space complexity: O(n)  
The algorithm will return a sorted array of the same length as the input array.

## #9

Time complexity: O(n<sup>2</sup>)
The algorithm iterates through each element in the first array and performs a linear search in the second array. The max number of operations will be for two arrays of size n, which will produce n<sup>2</sup> number of operations.

Space complexity: O(n)
The algorithm will return an array with a max length equal to the input array length.
## #10

Time complexity: O(n)
The algorithm uses two linear methods in sequence. The worst case scenario is that .filter does not reduce the size of the array and .reduce still acts on an array of size n.

Space complexity: O(n)
The algorithm will return an array with a max length equal to the input array length.

