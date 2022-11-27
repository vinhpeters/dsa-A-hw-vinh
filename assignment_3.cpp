#include <iostream>
#include <map>

using std::cout;
using std::map;
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

int majority(int nums[], int n)
{

    map<int, int> freqs;

    for (int i = 0; i < n; i++)
    {
        freqs[nums[i]]++;
    }

    for (auto freq : freqs)
    {
        if (freq.second > n / 2)
        {
            return freq.first;
        }
    }
    return -1;
}

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

int binarySearch(int nums[], int n, int target)
{
    int start = 0;
    int end = n;
    int middle;

    while (start <= end)
    {
        middle = (end + start) / 2;

        if (nums[middle] == target)
        {
            return middle;
        }
        else if (nums[middle] < target)
        {
            start = ++middle;
        }

        else
        {
            end = --middle;
        }
    }

    return -1;
}

int main()
{
    // Problem 1 Driver
    cout << "Problem 1"
         << "\n";

    int nums[] = {3, 2, 3};
    int n = sizeof(nums) / sizeof(int);
    cout << majority(nums, n) << "\n";

    int nums2[] = {2, 2, 1, 1, 1, 2, 2};
    n = sizeof(nums2) / sizeof(int);
    cout << majority(nums2, n) << "\n";

    // Problem 2 Driver
    cout << "Problem 2"
         << "\n";

    int arr[] = {-1, 0, 3, 5, 9, 12};
    n = sizeof(arr) / sizeof(int);

    int target = 9;
    cout << binarySearch(arr, n, target) << "\n";

    target = 2;
    cout << binarySearch(arr, n, target) << "\n";
}