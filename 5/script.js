window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("calcButton");
    b.addEventListener("click", function (event) {
        b = event.target;
        calculate();
    });
});

function calculate() {
    let price = document.getElementsByName("price");
    let count = document.getElementsByName("count");

    if (price[0].value < 0 || count[0].value < 0) {
        alert("Вводите целые положительные числа");
    } else if (price[0].value.match(/[.,]/) !== null || count[0].value.match(/[.,]/) !== null) {
        alert("Вводите целые числа");
    } else if (price[0].value.match(/[^0-9]/) !== null || count[0].value.match(/[^0-9]/) !== null) {
        alert("Вводите числа");
    } else {
        const result = Number(price[0].value) * Number(count[0].value);
        const out = "Стоимость покупки: " + result + " денежных единиц";
        document.getElementById("result").innerHTML = out;
    }
    return false;
}
