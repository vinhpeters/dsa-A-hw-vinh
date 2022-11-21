const subsequence = (str1, str2) => {
    let i = 0
    for (const ltr in str2) {

        if (str1[i] === ltr) {
            i++;

            if (i === str1.length) {
                return true
            }
        }
    }
    return false
}

// Test Cases:
subsequence('hello', 'hello world')