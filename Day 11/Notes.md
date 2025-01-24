## Day 11: Problem-Solving Practice  

*1. Problem-Solving with Variables, Loops, and Functions*  
- Practiced solving practical problems using variables, loops, and functions.  
- Focused on breaking problems into smaller steps to write cleaner and more efficient code.  

*2. Problems Solved*  

1. *Reverse a String*  
   - Used slicing to reverse characters in a string.  
   - Example (Python):  
     python
     def reverse_string(s):
         return s[::-1]

     print(reverse_string("Charu"))  # Output: urahC
       

2. *Sum of an Array*  
   - Added all numbers in a list using a loop.  
   - Example (JavaScript):  
     javascript
     function sumArray(arr) {
         let sum = 0;
         for (let i = 0; i < arr.length; i++) {
             sum += arr[i];
         }
         return sum;
     }

     console.log(sumArray([5, 10, 15, 20]));  // Output: 50
       

3. *Find the Smallest Number*  
   - Used a loop to find the smallest number in a list.  
   - Example (Python):  
     python
     def find_min(lst):
         min_value = lst[0]
         for num in lst:
             if num < min_value:
                 min_value = num
         return min_value

     print(find_min([8, 3, 5, 1, 9]))  # Output: 1
       

4. *Check Palindrome*  
   - Wrote a function to check if a string is a palindrome.  
   - Example (JavaScript):  
     javascript
     function isPalindrome(str) {
         let reversed = str.split('').reverse().join('');
         return str === reversed;
     }

     console.log(isPalindrome("madam"));  // Output: true
     console.log(isPalindrome("hello"));  // Output: false
       
*Reflection*  
- Solving problems step by step improved my debugging and logical thinking.  
- Working on examples like palindromes and array operations made loops and functions feel intuitive.  

*Looking Forward:*  
Next, I’ll tackle more complex problems like recursion and nested loops to build my programming skills further.
