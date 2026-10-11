document.getElementById("cash-out-btn").addEventListener("click", function () {
    const cashMoneyValue = Number(document.getElementById("cashout-amount").value);
    const balanceElement = Number(document.getElementById("balance").innerText);
    const newBalance = balanceElement - cashMoneyValue;

    if (cashMoneyValue>balanceElement) {
        alert("Insufficient-ammount")
        return;
    }
    document.getElementById("balance").innerText = newBalance;
    const admoneySection = document.getElementById("ad-money-section")
    admoneySection.classList.add("hidden");
    


})