"use strict";

// how does a tip calculator works
// 1. enter a bill
// 2. enter the tip in percentage
// 3. divide the bill by the number of people// billPerPerson =  (bill / noofpeople)
// 4.  To get the tipPerPerson, tip = billPerPerson * tip/100;
// 5. totalbillPerPerson = (billPerPerson + tip)

const tipBtn = document.querySelectorAll(".btn");
const percentage = document.querySelectorAll(".percentage");
const billField = document.querySelector(".bill");
const noOfPeople = document.querySelector(".number-ofPeople");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total");
const resetBtn = document.querySelector(".reset-btn");
const customField = document.querySelector(".custom-field");

// calculating the tip onClick
for (let i = 0; i < tipBtn.length; i++) {
  tipBtn[i].addEventListener("click", () => {
    if (billField.value && noOfPeople.value) {
      // BILLPERPERSON, divide the number of bill by the nunmber of people, CONVERT IT TO NUMBER;
      const billPerPerson = Number(billField.value) / Number(noOfPeople.value);

      /*TIPPERPERSON, multiply the billperperson by the 
    tipBtn.textContent, convert it to number*/
      const tipPerPerson =
        billPerPerson * (Number(percentage[i].textContent) / 100);

      //TOTALPERPERSON, add billperperson + tipPerPerson to get total per person
      const totalPerPerson = billPerPerson + tipPerPerson;

      // Then display the top amount and the total on the interface
      tipAmount.textContent = tipPerPerson.toFixed(2);
      totalAmount.textContent = totalPerPerson.toFixed(2);

      // for the reset button color;
      resetBtn.classList.remove("bg-darkGrayishCyan");
      resetBtn.classList.add("bg-strongCyan");
    }
  });
}

// for the custom field
document.addEventListener("keydown", (e) => {
  if (billField.value && noOfPeople.value) {
    if (e.key === "Enter" && customField) {
      e.preventDefault();

      // BILLPERPERSON, divide the number of bill by the nunmber of people, CONVERT IT TO NUMBER;
      const billPerPerson = Number(billField.value) / Number(noOfPeople.value);

      /*TIPPERPERSON, multiply the billperperson by the 
    customField.value, convert it to number*/
      const tipPerPerson = billPerPerson * (Number(customField.value) / 100);
      console.log(tipPerPerson);

      //TOTALPERPERSON, add billperperson + tipPerPerson to get total per person
      const totalPerPerson = billPerPerson + tipPerPerson;

      // Then display the top amount and the total on the interface
      tipAmount.textContent = tipPerPerson.toFixed(2);
      totalAmount.textContent = totalPerPerson.toFixed(2);

      // for the reset button color;
      resetBtn.classList.remove("bg-darkGrayishCyan");
      resetBtn.classList.add("bg-strongCyan");
    }
  }
});

// reset button
resetBtn.addEventListener("click", () => {
  const bill = "";
  const custom = "";
  const persons = "";
  const tip = "0.00";
  const total = "0.00";

  billField.value = bill;
  customField.value = custom;
  noOfPeople.value = persons;
  tipAmount.textContent = tip;
  totalAmount.textContent = total;

  resetBtn.classList.add("bg-darkGrayishCyan");
  resetBtn.classList.remove("bg-strongCyan");
});
