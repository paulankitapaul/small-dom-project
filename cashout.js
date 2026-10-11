

// Show modal
function showModal(title, message) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-message").innerText = message;

    modal.showModal();
}

// Close modal
document.getElementById("modal-close").addEventListener("click", function () {
    modal.close();
});

// Cash Out button
document.getElementById("cash-out-btn").addEventListener("click", function () {

    // Get Cash Out amount
    const cashMoneyValue = Number(
        document.getElementById("cashout-amount").value
    );

    // Get current balance
    const balanceElement = Number(
        document.getElementById("balance").innerText
    );

    // Check empty, zero or negative amount
    if (
        document.getElementById("cashout-amount").value.trim() === "" ||
        !Number.isFinite(cashMoneyValue) ||
        cashMoneyValue <= 0
    ) {
        showModal(
            "Invalid Amount!",
            "Please enter an amount greater than 0."
        );
        return;
    }

    // Check sufficient balance
    if (cashMoneyValue > balanceElement) {
        showModal(
            "Insufficient Balance!",
            "You don't have enough balance."
        );
        return;
    }

    // Calculate new balance
    const newBalance = balanceElement - cashMoneyValue;

    // Update balance
    document.getElementById("balance").innerText = newBalance;

    // Clear input field
    document.getElementById("cashout-amount").value = "";

    // Hide Add Money section
    const admoneySection = document.getElementById("ad-money-section");

    admoneySection.classList.add("hidden");

});
