// Write your solution in this file!
var customerName = `bob`
function upperCaseCustomerName(){
    customerName =customerName.toUpperCase();
}
var bestCustomer;
function setBestCustomer(){
    bestCustomer = `not bob`;
}
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = "simon";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Mary"; // This line should throw an error
}
