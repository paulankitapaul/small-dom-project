document.getElementById("ad-money-btn").addEventListener("click", function () {
    const addMoneyValue = Number(document.getElementById("add-amount").value);
    const balanceElement = Number(document.getElementById("balance").innerText);
    const newBalance = balanceElement + addMoneyValue;
    console.log(addMoneyValue,balanceElement);

    if (newBalance <= 0) {
        alert("Invaild-ammount")
        return;
    }
    document.getElementById("balance").innerText = newBalance;
    const cashoutSection = document.getElementById("cashout-section")
    cashoutSection.classList.add("hidden");



})