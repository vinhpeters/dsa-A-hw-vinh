/* Problem 1

Pseudocode

Count frequencies of each item and store the counts in a dictionary. Return key with max frequency.


def solution(nums)
    for nums in nums
        if nums in freq
            freq[nums]++1
        else
            freq[nums] = 1
    return max(freq)
 */

const solution = (nums) => {

    freq = {};
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    return Object.keys(freq).find(key => freq[key] === Math.max(...Object.values(freq)))
}
console.log("Problem 1");

nums = [3, 2, 3];
console.log(solution(nums));

nums = [2, 2, 1, 1, 1, 2, 2];
console.log(solution(nums));


const solutionMap = (nums) => {
    freq = new Map()
    for (let num of nums) {
        (freq.get(num) ? freq.set(num, freq.get(num) + 1) : freq.set(num, 1));
    }
    // I thought map might be easier to get the key, lol 
    return [...freq.keys()][[...freq.values()].indexOf(Math.max(...freq.values()))]
}
console.log("Problem 1 map");
nums = [3, 2, 3];
console.log(solutionMap(nums));
nums = [2, 2, 1, 1, 1, 2, 2];
console.log(solutionMap(nums));

/* Problem 2

Pseudocode
Use three pointers, start, middle and end. Compare value at middle index to target. If target < middle, change end to middle - 1. If target > middle, change start to middle + 1.

def binaryIterativeSearch(nums, target)
    start = 0
    end = len(nums)-1

    while start < end
        middle = floor((end + start)/2)
        if nums[middle] == target
            return middle

        if nums[middle] > target
        # Search in lower half, between start and middle
        end = middle -1

        elif nums[middle] < target
        # Search in upper half, between middle and end
        start = middle + 1

    # Else return -1 if target not found
    return -1
        
 */

const binaryIterativeSearch = (nums, target) => {
    start = 0;
    end = nums.length - 1;

    while (start <= end) {
        middle = ~~((end + start) / 2);
        if (nums[middle] == target) return middle;

        else if (nums[middle] > target) end = middle - 1;

        else if (nums[middle] < target) start = middle + 1;
    }

    return -1
}
console.log("Problem 2");
nums = [-1, 0, 3, 5, 9, 12]
target = 9
console.log(binaryIterativeSearch(nums, target))

nums = [-1, 0, 3, 5, 9, 12]
target = 2
console.log(binaryIterativeSearch(nums, target))

// Extra Problems

// Problem 1

/*
Psuedocode
Sort array. For each pair, count numbers in array while sum pair > number.


def triangleNumber(nums):
    triplets = 0
    nums.sort()
    # Loop for first number
    for i in range(len(nums)-2):
        # Loop for second number
        for j in range(i+1,len(nums)-1):
            k= j + 1
            while nums[k] < (nums[i]+nums[j]) and k < len(nums)
                k++
            triplets += k-j-1
            
    return triplets

*/

const triangleNumber = (nums) => {
    let triplets = 0;
    nums.sort();
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] != 0) {

            for (let j = i + 1; j < nums.length - 1; j++) {
                let end = nums.length - 1;
                let start = i + 2;

                while (start <= end) {
                    let mid = ~~((start + end) / 2);
                    if (nums[mid] >= nums[i] + nums[j]) {
                        end = mid - 1;
                    }
                    else {
                        start = mid + 1;
                    }
                }
                triplets += end - j;
            }
        }
    }
    return triplets;
}
console.log('triangleNumber')

nums = [2, 2, 3, 4]
console.log(triangleNumber(nums))

nums = [4, 2, 3, 4]
console.log(triangleNumber(nums))

// Alt version

/* Pseudocode
Sort array. For each pair, count numbers in array while sum pair > number. 
*/

const triangleNumberCount = (nums) => {
    let triplets = 0;
    nums.sort();
    for (let i = 0; i < nums.length - 2; i++) {

        if (nums[i] != 0) {

            for (let j = i + 1; j < nums.length - 1; j++) {

                let k = i + 2;
                while (k < nums.length && nums[k] < nums[i] + nums[j]) {

                    k += 1;
                }
                triplets += k - j - 1;

            }
        }
    }
    return triplets;
}

console.log('Triangle number v2')

nums = [2, 2, 3, 4]
console.log(triangleNumberCount(nums))

nums = [4, 2, 3, 4]
console.log(triangleNumberCount(nums))


// Problem 2
/* Pseudocode

Use a dict to count the frequency of each element. If count value is greater than 1, add number to output list. 

def findDuplicates(nums)
    freqs={}
    output = []
    # Loop through list
    for num in nums
        freqs[num] = freqs[num] + 1 if num in freqs else 1
        ## Save number to output as soon as freq > 1
        if freqs[num] > 1
            output.append(num)
    return output

 */

const findDuplicates = (nums) => {
    const output = [];
    freqs = new Map();
    for (let num of nums) {
        (freqs.get(num) ? freqs.set(num, freqs.get(num) + 1) : freqs.set(num, 1));
        if (freqs.get(num) > 1) {
            output.push(num)
        }
    }
    return output;
}

console.log('Find duplicates')
nums = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDuplicates(nums))
