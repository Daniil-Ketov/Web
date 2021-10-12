window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
});

function calculate() {
    let price = document.getElementsByName("price");
    let count = document.getElementsByName("count");

    if (price[0].value < 0 || count[0].value < 0) {
        alert("Вводите целые положительные числа");
    }
    else if (price[0].value.match(/[.,]/) != null || count[0].value.match(/[.,]/) != null) {
        alert("Вводите целые числа");
    }
    else if (price[0].value.match(/\d/) == null || count[0].value.match(/\d/) == null) {
        alert("Вводите числа");
    }
    else {
        const result = Number(price[0].value) * Number(count[0].value);
        document.getElementById("result").innerHTML = "Стоимость покупки: " + result + " денежных единиц";
    }
    return false;
}