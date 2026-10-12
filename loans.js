const customerId = "C101";
const employment = "Salaried";
const income = 50000;
const loanAmount = 200000;
const emi = 10000;
const creditScore = 780;

let loanEligibility = "Not Eligible";
let category = "Not Eligible";
let remarks = "";

if (income >= 30000 && emi <= income * 0.5) {
    if (employment === "Salaried" && creditScore >= 750) {
        loanEligibility = "May Be Eligible";
        category = "Standard";
        remarks = "Meets standard category requirements";
    } else if (creditScore >= 650 && creditScore <= 749) {
        loanEligibility = "May Be Eligible";
        category = "Restricted";
        remarks = "Meets restricted category requirements";
    } else {
        remarks = "Minimum eligibility requirements not satisfied";
    }
} else {
    remarks = "Income or EMI requirements not satisfied";
}

console.log("Banking Loan Eligibility Pre-Screening System");
console.log("---------------------------------------------");
console.log("Customer ID:", customerId);
console.log("Employment Type:", employment);
console.log("Monthly Income:", income);
console.log("Requested Loan Amount:", loanAmount);
console.log("Credit Score:", creditScore);
console.log("Existing EMI:", emi);
console.log("Loan Eligibility:", loanEligibility);
console.log("Eligibility Category:", category);
console.log("Remarks:", remarks);