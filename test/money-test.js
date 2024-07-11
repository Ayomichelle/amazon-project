import { formateCurrency } from "../script/Utiity/money.js";

console.log("money suites: formatCurrency")

console.log("converting cents to dollars:")
if (formateCurrency(2095) === "20.95"){
    console.log("Passed")
}
else{ 
    console.log("Failed")
}

console.log("converting 0 to dollars:")
if(formateCurrency(0) === "0.00"){
    console.log("Passed")
}
else{
    console.log("Failed")
}

console.log("rounding pricecents to dollars using math.round:")
if(formateCurrency(2000.5) === "20.01"){
    console.log("Passed")
}
else{
    console.log("Failed")
}