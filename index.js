full_name = document.getElementById("full_name");
f_name = "Ruben";
full_name.innerHTML = "Welcome " + f_name + " to the BOF Bank";

let check_balance = document.getElementById("check_balance");
let deposite = document.getElementById("deposite");
let withdrawl = document.getElementById("withdrawl");
let balance = document.getElementById("balance");
let array_value = document.getElementById("array_value");

let current_balance = 0;
let result = 0;
let history_array = [];

check_balance.onclick = function () {
  result = current_balance + Math.floor(Math.random() * 10000 + 1000);

  balance.innerHTML = f_name + " Your balance is $" + result;

  this.onclick = null; // allow to click only one time
};

deposite.onclick = function () {
  let deposit_amount = Number(prompt("How much do you want to deposit?"));

  if (deposit_amount > 0) {
    history_array.push(result);
    array_value.innerHTML ="Previous balance $" + history_array[history_array.length - 1];
    result = result + deposit_amount;
    balance.innerHTML = f_name + " Your balance increaced by $" + deposit_amount + ", Total balance is $" + result;
    
  } else {
    do {
      deposit_amount = Number(prompt("Please Enter more than $0 and only number"));
    } while (isNaN(deposit_amount) || (deposit_amount == 0));
    history_array.push(result);
    array_value.innerHTML ="Previous balance $" + history_array[history_array.length - 1];
    result = result + deposit_amount;
    balance.innerHTML = f_name +" Your balance increaced by $" + deposit_amount + ", Total balance is $" + result;
  }
};

withdrawl.onclick = function () {
  let withdrawl_amount = Number(prompt("How much do you want to withdrawl?"));

  if (withdrawl_amount > 0) {
    history_array.push(result);
    array_value.innerHTML ="Previous balance $" + history_array[history_array.length - 1];
    result = result - withdrawl_amount;
    balance.innerHTML = f_name + " Your balance decreaced by $" + withdrawl_amount + ", Total balance is $" + result;
  } else {
    do {
        deposit_amount = Number(prompt("Please Enter more than $0 and only number"));
      } while (isNaN(deposit_amount) || (deposit_amount == 0));
      history_array.push(result);
      array_value.innerHTML ="Previous balance $" + history_array[history_array.length - 1];
      result = result - deposit_amount;
      balance.innerHTML = f_name +" Your balance increaced by $" + deposit_amount + ", Total balance is $" + result;
  }
};
