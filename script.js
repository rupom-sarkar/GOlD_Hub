function welcomeMessage() {
    alert("Welcome to Rupom Gold Hub! Explore our premium gold jewelry collection.");
}

function aboutStore() {
    alert("Rupom Gold Hub offers authentic gold jewelry with trusted quality and elegant designs.");
}

function buyNow(productName) {
    let answer = confirm("Do you want to buy " + productName + "?");

    if (answer) {
        alert("Order placed successfully!");
    } else {
        alert("You can continue shopping.");
    }
}

function contactMessage() {
    alert("Thank you for contacting Rupom Gold Hub! We will get back to you soon.");
}