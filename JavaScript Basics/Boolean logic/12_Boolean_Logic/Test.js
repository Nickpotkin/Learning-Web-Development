// console.log("Hello from the console log!!!");
// console.error("ERROR!!!!!");
// console.warn("Warning!");
// console.info("Clearing data!");

const password = prompt("Please enter a new password");

if(password.length >= 6 && password.indexOf(' ') === -1){
   console.log("VALID PASSWORD!");
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD!");
}
