#include <iostream>
#include <string>

using std::cout;
using std::string;

int longestSubstringInString(string str)
{
    char window[128];
    int n;

    if (str.length() == 0)
    {
        return str.length();
    }

    for (int i; i < str.length(); i++)
    {
        n = sizeof(window) / sizeof(window[0]);
        for (int j; j < n; j++)
        {
            if (str[i] == window[j])
            {
                return n;
            }
        }
        window[i] = str[i];
    }
    return str.length();
}

int main()
{
    // Problem 1 Test Cases
  /*   cout << "Problem 1\n";
    cout << subsequence("hello", "hello world");
    cout << "Problem 2\n";
    cout << longestSubstringInString("");    */           // 0
    cout << longestSubstringInString("rithmschool");   // 7 because of ‘rithmsc’

}