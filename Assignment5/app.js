let n1 = 5;
let n2 = 3;
alert("The sum of " + n1 + " and " + n2 + " is " + parseInt(n1 + n2));

let n3 = 5;
let n4 = 3;
alert("The subtraction of " + n3 + " and " + n4 + " is " + parseInt(n3 - n4));

let n5 = 5;
let n6 = 3;
alert(
  "The multiplication of " + n5 + " and " + n6 + " is " + parseInt(n5 * n6)
);

//Number3
var myVariable;
document.write("Value after variable declaration is: " + myVariable + "<br>");
myVariable = 3;
document.write("Initial value: " + myVariable + "<br>");
myVariable++;
document.write("Value after increment is: " + myVariable + "<br>");
myVariable += 7;
document.write("Value after addition is: " + myVariable + "<br>");
myVariable--;
document.write("Value after decrement is: " + myVariable + "<br>");
var remainder = myVariable % 3;
document.write("The remainder is: " + remainder + "<br>");

//Number4
var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write(
  "Cost of buying " + numberOfTickets + " movie tickets: " + totalCost + " PKR"
);

// Number 5
var number = parseInt(
  prompt("Enter a number to display its multiplication table:")
);
if (!isNaN(number)) {
  document.write("<h2>Multiplication Table for " + number + "</h2>");
  for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + number * i + "<br>");
  }
} else {
  document.write("Invalid input. Please enter a valid number.");
}
