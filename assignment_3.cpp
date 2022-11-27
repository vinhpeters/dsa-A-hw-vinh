#include <iostream>
#include <map>

using std::cout;
using std::map;

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