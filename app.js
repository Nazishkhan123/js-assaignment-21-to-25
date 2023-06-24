// -------JS ASSAIGNMENT 21 T0 25 STRING METHODS---------


// Q1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")

// var fullName = firstName + " " + lastName
// alert ("Hello " + fullName + " welcome!")

// Q2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var userInput=prompt("Enter your favourite mobile phone model");
// var inputLength  = userInput .length;
// document.write("<h1>My favourite phone is:" + userInput   + "<br>" + " Length of string:" + 28 );


// Q3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser . 

//  var word = "pakistani";
//  document.write("<h1>string:" + word + "<br>")
 
//  document.write( "index of  'n'" +  word.indexOf ("n"));

// Q4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var word = "Hello World";

// document.write("<h1>string:" + word + "<br>")
// document.write("Last Index Of 'l':" + word.lastIndexOf("l"));

// Q5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var  word = "Pakistani";  
// document.write("<h1>String: " + word + "<br>");
// document.write("character at index 3: " + word.charAt(3));


// Q6. Repeat Q1 using string concat() method. 

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")

// var fullName = firstName.concat(" ",lastName)
// alert ("Hello " + fullName + " welcome!")



//  Q7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser. 

// var city = "Hyderabad";   
// var newCity = city.replace("Hyder","Islam");
// document.write("<h1>City:" + city + "<br>");
// document.write("After replacement:" + newCity);

// Q8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// for(var i=0;i<message.length;i++){
//     if(message.slice(i,i+3)=== "and"){
//         message=message.slice(0,i) + "&" + message.slice(i+3)
//     }
// }
// document.write(message)

// Q9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// let string = "472";
// let num = Number(string);
// document.write("<h1>Value: " + string + "<br>");
// document.write("Type: " + typeof string + "<br>");
// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num); 

// Q10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var userInput = prompt("Enter a letters")
// userInput = userInput.toUpperCase()
// document.write("<h1>UserInput: " + "Peanuts " + "<br>")
// document.write("Upper Case: " + userInput)

// Q11. Write a program that takes user input. Convert and
// show the input in title case.

// var userInput = prompt("Enter a letter")
// document.write("<h1>User input:" + userInput + "<br>")
// var check = userInput[0].toUpperCase();
// var copy =  userInput.slice(1);
// var userInput = check + copy;
// document.write("Title Case:" + userInput)

// Q12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = "35.36";
// document.write("<h1>Number:" + num + "<br>")
// var num = num.replace("35.36","3536" )
// document
// document.write("Result:" + num)

// Q13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// let userName = prompt("enter your name")
// if(userName.includes === ("@") || userName.includes === (".") || userName.includes === (",") || userName.includes ===("!")){
//     alert("enter valid user name")
// }


// Q14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:


// let A = ["cake","Apple","cookie","chips","patties"]
// var A_lower = A.map(item => item.toLowerCase());
// var user_input = prompt("Welcome to our backery, What you want to order Sir/Madam");
// var user_input_lower = user_input.toLowerCase();
// if (A_lower.includes(user_input_lower)) {
//     alert(user_input_lower+" is available at our bakery.");
// } else {
//     alert("We are sorry This item is not available in our bakery");
// }

// Q15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
// const ascii_of_0 = 48;
// const ascii_of_small_a = 97;
// const ascii_of_capital_A = 65;

// var password = prompt("enter a password")
// var hasLength = password.length >=6;
// var hasNumber = false;
// var hasSmallAlphabet = false;
// var startsWithNumber = password.charCodeAt(0) >= ascii_of_0 && password.charCodeAt(0) <= 57;

// for(var i=0;i<password.length;i++){
//   let charCode = password.charCodeAt(i);
//   if (charCode >= ascii_of_0 && charCode <= 57) {
//         hasNumber = true;
//       } else if (charCode >= ascii_of_small_a && charCode <= 122) {
//             hasSmallAlphabet = true;
//           }
//         }

//         if (!hasLength){
//           prompt("your password must be at least 6 characters long.Please enter a new password")
//         } else if (!hasNumber) {
//             prompt("Your password must contain at least one number. Please enter a new password.");
//           } else if (!hasSmallAlphabet) {
//             prompt("Your password must contain at least one small alphabet. Please enter a new password.");
//           } else if (startsWithNumber) {
//             prompt("Your password cannot start with a number. Please enter a new password.");
//           } else {
//             document.write("Password: " + password);
//           }

// Q16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser 

// var university = "university of karachi"

// for (var i=0;i<university.length;i++){
   
//     document.write( university[i] + "<br>")

// }

// Q17. Write a program to display the last character of a user input.


// var userInput = prompt("Enter a character")
// document.write("<h1>User input:" + userInput + "<br>")
// document.write("Last character of input:"  + userInput.charAt(7) );

// Q18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.

// let sentence = "The quick brown fox jumps over the lazy dog";

// let word = "the";

// let lowercaseSentence = sentence.toLowerCase();

// let words = lowercaseSentence.split(" ");

// let count = 0;
// for (var i = 0; i < words.length; i++) {
//   if (words[i] === word) {
//     count++;
//   }
// }

// document.write("Number of occurrences of the word 'the': " + count);



 






