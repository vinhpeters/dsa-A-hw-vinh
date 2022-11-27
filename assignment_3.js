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