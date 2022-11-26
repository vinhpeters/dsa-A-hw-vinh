#include <iostream>
#include <string>

using std::cout;
using std::string;

// Problem 1
string subsequence(string str1, string str2)
{
    int i = 0;
    int j = 0;
    while (i < str1.length() && j < str2.length())
    {
        if (str1[i] == str2[j])
            i++;
        if (i == str1.length())
        {
            return "true";
        }
        j++;
    }
    return "false";
}


int main()
{
    // Problem 1 Test Cases
    cout << "Problem 1\n";
    cout << subsequence("hello", "hello world");
} 
