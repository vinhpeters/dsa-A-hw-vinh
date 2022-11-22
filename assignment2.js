/*
Problem 1
Write a function called subsequence which takes in two strings and checks whether
the characters in the first string form a subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first string
appear somewhere in the second string, without their order changing.
Write your solution with time complexity O(n) and space O(1)
*/

/*  Pseudocode

Use two pointers, i & j, one for each string. i only progresses when match is found in second string.  
If i reaches the end of str1, return true, if j reaches the end of str2, return false.  

def subsequence(str1,str2)
    i,j = 0
    while i<len(str1) & j<len(str2)
        if str1[i] == str2[j]
            i++
        if i==len(str1)
            return True
        j++
    return False
*/

const subsequence = (str1, str2) => {
    let i = 0, j = 0;
    while (i < str1.length && j < str2.length) {
        if (str1[i] == str2[j])
            i++;
        if (i == str1.length) {
            return true;
        }
        j++;
    }
    return false;
}

// Test Cases:
console.log('Problem 1')
console.log(subsequence('hello', 'hello world')) //true
console.log(subsequence('sing', 'sting')) //true
console.log(subsequence('abc', 'abracadabra')) //true
console.log(subsequence('abc', 'acb')) //false

/*
Problem 2
Write a function called longestSubstringInString, which accepts a string and
returns the length of the longest substring with all distinct characters from the START of the
string.
Please write in time complexity of O(n)
*/

/* Pseudocode

Use  a sliding window starting at beginning of the string. Expand window and check if new character is already in the window. If character is already in the window, break and return length of window.

def longestSubstringInString(str)
    # Initialize empty list for window
    window=[]
    for char in str
        if char in window
            return len(window)
        # Else, add char to window
        window.append(char)
 */

const longestSubstringInString = (str) => {
    const window = [];
    if (str.length == 0) {
        return 0;
    }
    for (const i in str) {
        if (window.includes(str[i])) {
            return window.length;
        }
        window.push(str[i]);
    }
}

// Test Cases:
console.log('Problem 2')
console.log(longestSubstringInString('')) // 0
console.log(longestSubstringInString('rithmschool')) // 7 because of ‘rithmsc’
console.log(longestSubstringInString('thisisawesome'))// 4 because of ‘this’
console.log(longestSubstringInString('thecatinthehat'))// 5 because of ‘theca’
console.log(longestSubstringInString('bbbbbb'))// 1 because of ‘b’
console.log(longestSubstringInString('longestsubstring'))// 7 because of ‘longest’
console.log(longestSubstringInString('thisishowwedoit')) // 4 because of ‘this’

/* Problem 2 Bonus */

/* Pseudocode
Use a sliding window starting at beginning of the string. Expand window and check if new character is already in the window. 
If character is already in the window, remove repeated character and preceding characters from the window.

def longestSubstringInString(str)
    # Initialize empty list for window
    window=[]
    # Initialize initial max length to 0
    maxLen = 0
    for char in str
        if char in window
            # Remove repeated char and preceding chars
            window = window[window.index(char)+1 :]
        # Else, add char to window
        window.append(char)
        # Compare window length to running max
        maxLen = max(maxLen, len(window))
    return maxLen
    
*/

const longestSubstringInString2 = (str) => {
    let window = []
    let maxLen = 0
    if (str.length === 0) {
        return 0;
    }
    for (const i in str) {
        if (window.includes(str[i])) {
            window = window.slice(window.indexOf(str[i]) + 1, window.length)
        }
        window.push(str[i]);
        maxLen = Math.max(maxLen, window.length)
    }
    return maxLen
}

console.log('Problem 2 Bonus')
console.log(longestSubstringInString2(''))
console.log(longestSubstringInString2('rithmschool'))
console.log(longestSubstringInString2('thisisawesome'))
console.log(longestSubstringInString2('thecatinthehat'))
console.log(longestSubstringInString2('bbbbbb'))
console.log(longestSubstringInString2('longestsubstring'))
console.log(longestSubstringInString2('thisishowwedoit'))
console.log(longestSubstringInString2('rollercoaster')) //8 because of 'lercoast'