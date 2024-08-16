function Calculate() {
    const amount = document.querySelector("#amount").value;
    const rate = document.querySelector("#rate").value;
    const time = document.querySelector("#time").value;

    const interest = (amount * (rate * 0.01)) / time;
    const total = ((amount / time) + interest).toFixed(2);

    document.querySelector("#total").innerHTML = " monthly pay : ₹" + total;
}