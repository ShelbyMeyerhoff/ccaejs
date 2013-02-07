// Exercise 1.review - Ask the user for their name. Welcome them with a personalized message.
var name = prompt("Your name please?");

alert("Welcome " + name);
// 2.1 - Conditionals
// Exercise 2.1.1 - Ask the user for 2 numbers. Tell them if the first or second number was bigger.

var first_num = prompt("Enter the first number?");
var second_num = prompt("Enter the second number?");

if (first_num < second_num)
	alert("first  < second");
else if (first_num > second_num)
	alert("first_num > second_num");
else
	alert("Both numbers are equal.");



// Exercise 2.1.2 - Ask the user for a number. Tell the user whether it is odd or even.
var a_number = prompt("Enter a number?");

if (a_number % 2 == 0)
	alert("Its an even number.");
else
	alert("Its an odd number.");

// Exercise 2.1.3 - Ask the user what month they were born in. Tell them what season that month is in.



// 2.2 - Loops
// Exercise 2.2.1 - Use a loop to count from 10 to 1. Alert each value as you count.
var i;
for (i=0; i < 10; i++)
{
	alert("i value: " + i);
}

// Exercise 2.2.2 - Use a loop to count from 10 to 20. Add each number to a total sum and alert that value at the end.
var i;
var sum = 0;
for (i=10; i < 20; i++)
{
	sum += i;
	
}
alert("sum: " + sum);
	
// Exercise 2.2.3
// Generate a random number (I haven't told you how to do this. Try Googling for it)
// Ask the user to try to guess the number (Give them the possible range)
// Tell the user if they got the number or if they were too high or too low.
// Let the user continue guessing until they get to the right answer.
var r_number;
while(true)
{
	r_number = Math.random();

	alert("Are you ok with the number " + r_number + "?");
	var ok_or_not = prompt("Enter 1 for OK, 0 for NOT OK.");

	if (ok_or_not == 1)
		break;
	else
		continue;
}


// 2.3 - Arrays
// Create an array of usernames. They can be anything.
// Ask the user for their name. Check to see if that name is on the list.
// If the user is on the list, welcome them in. Otherwise, tell them to leave!
// Bonus: Now that this is working, try Googling for an easier way to do this.

var username_array = ["Max", "John", "Jim"];
var your_username = prompt("What is your username?");

var i = username_array.length(), j, k=0;

for (j = 1; j <=i ; j++)
{
	if(username_array[j] == your_username)
		k = 1;


}

if (k == 1)
	alert("Welcome " +  your_username);
else
	alert("Your username " +  your_username + "is not in the list. Please leave");




// Exercise 2.3.2
// Generate 10 random numbers and show them all to the user.
// Ask the user for the index of the biggest number. Tell them whether or not they were right.


// Exercise 2.3.3 - Modify your code from exercise 2.2.3 to allow the user to replay.
// Add a scoreboard array to keep track of how many guesses it took them to win.
// Show the user the scoreboard each time and congratulate them if they beat their best.