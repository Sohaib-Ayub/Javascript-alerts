//Number6
var celsiusTemperature = 48;

var fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
document.write(
  celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>"
);

var fahrenheitTemperature2 = 89;

var celsiusTemperature2 = ((fahrenheitTemperature2 - 32) * 5) / 9;
document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");
document.write("<br>");
document.write("<br>");
//Number7
var priceItem1 = 560;
var priceItem2 = 200;
var quantityItem1 = 2;
var quantityItem2 = 5;
var shippingCharges = 150;

var totalCost =
  priceItem1 * quantityItem1 + priceItem2 * quantityItem2 + shippingCharges;

document.write("<h2>Shopping Cart</h2>");
document.write("Price of Item 1: " + priceItem1 + "<br>");
document.write("Ordered Quantity of Item 1: " + quantityItem1 + "<br>");
document.write("Price of Item 2: " + priceItem2 + "<br>");
document.write("Ordered Quantity of Item 2: " + quantityItem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + "<br>");
document.write("Total Cost: " + totalCost + " PKR");
document.write("<br>");
document.write("<br>");
//Numbber8
var totalMarks = parseFloat(prompt("Enter the total marks:"));
var marksObtained = parseFloat(prompt("Enter the marks obtained:"));
if (!isNaN(totalMarks) && !isNaN(marksObtained)) {
  var percentage = (marksObtained / totalMarks) * 100;

  document.write("Total Marks: " + totalMarks + "<br>");
  document.write("Marks Obtained: " + marksObtained + "<br>");
  document.write("Percentage: " + percentage.toFixed(2) + "%");
} else {
  document.write("Invalid input. Please enter valid numbers.");
}
document.write("<br>");
document.write("<br>");
//Number9

var uSDollars = 10;
var saudiRiyals = 25;
var exchangeRateUSD = 104;
var exchangeRateSAR = 28;
var totalPKR = (uSDollars*exchangeRateUSD) + (saudiRiyals*exchangeRateSAR);

document.write("Total in Pakistani Rupees: " + totalPKR + " PKR")
