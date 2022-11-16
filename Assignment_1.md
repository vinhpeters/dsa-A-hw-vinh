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
    let max=arr[i];
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
    let i=0;
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

```js

/*Fibonacci sequence
Fn = Fn-1 + Fn-2 for every n 

f2= f0+f1
f3=f0+f1+f2
*/

function fibonacci(N) {
    let n=0;
    let fn0=0;
    let fn1=1;
    while (n <= N) {
         = fibonacci(n) 
        console.log(`F(${n}) = $)
    }

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
2 constant time operations + linear time for loop + linear time for loop + 2 nested linear for loops ==> O(1 + 1 + n + n + n * n) ==> O(2+2n+n<sup>2</sup>)\
Consolidated ==> O(n<sup>2</sup>)

## Problem 6
---
1 constant time operation + 1 linear while loop + 3 nested linear for loops ==> O(1 + n + n*n\*n) ==> O(1 + n + n<sup>3</sup>)\
Consolidated ==> O(n<sup>3</sup>)

## Problem 7
---
As the input data scales the higher order operations will become the dominant factors for the running. For O(1+n+n<sup>2</sup>) with *n* = 10, we would have a total number of operations on the order of 10 + 10<sup>2</sup>= 110. The contribution from the linear portion is 10/110= 0.091 or 9.091%. If *n* increases to 100, the number of operations become 100 + 100<sup>2</sup> = 10,100. The percentage from the linear portion is 100/(100+100<sup>2</sup> ==> 0.99%. As the input data increases , the contributions from the lower ordered operations become negligible.
