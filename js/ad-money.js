
const modal = document.getElementById("my_modal");

function showModal(title, message) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-message").innerText = message;

    modal.showModal();
}

// Close modal
document.getElementById("modal-close").addEventListener("click", function () {
    modal.close();
});

// Add Money
document.getElementById("ad-money-btn").addEventListener("click", function () {

    const addMoneyValue = Number(
        document.getElementById("add-amount").value
    );

    const balanceElement = Number(
        document.getElementById("balance").innerText
    );

    // Validate amount
    if (addMoneyValue <= 0) {
        showModal("Invalid Amount!", "Please enter an amount greater than 0.");
        return;
    }

    // Update balance
    const newBalance = balanceElement + addMoneyValue;
    document.getElementById("balance").innerText = newBalance;

    // Hide Cash Out section
    const cashoutSection = document.getElementById("cashout-section");
    cashoutSection.classList.add("hidden");
});
