window.addEventListener("DOMContentLoaded", function () {
    let o = document.getElementsByName("options");
    let delivery;
    let pack;
    o[0].addEventListener("change", function (event) {
        let deliveries = document.getElementById("deliveries");
        pack = document.getElementById("package");
        let options = event.target;
        console.log(options.value);
        if (options.value === "1") {
            deliveries.style.display = "none";
            pack.style.display = "none";
            calculateAddons();
        } else if (options.value === "2") {
            deliveries.style.display = "flex";
            pack.style.display = "none";
            calculateAddons("d1");
        } else if (options.value === "3") {
            deliveries.style.display = "none";
            pack.style.display = "flex";
            calculateAddons(pack.checked);
        }
    });

    let d = document.querySelectorAll(".deliveries input[type=radio]");
    d.forEach(function (radio) {
        radio.addEventListener("change", function (event) {
            d = event.target;
            console.log(d.value);
            delivery = d.value;
            calculateAddons(d.value);
        });
    });

    let p = document.getElementById("package");
    p.addEventListener("change", function (event) {
        p = event.target;
        console.log(p.checked);
        pack = p.checked;
        calculateAddons(p.checked);
    });

    let c = document.getElementById("count2");
    c.addEventListener("change", function (event) {
        c = event.target;
        console.log(c.value);
        if (document.getElementsByName("options")[0].value === "2") {
            calculateAddons(delivery);
        } else if (document.getElementsByName("options")[0].value === "3") {
            calculateAddons(pack);
        }
    });

    let b = document.getElementById("calcButton");
    b.addEventListener("click", function (event) {
        b = event.target;
        calculate();
    });
});

function calculate() {
    let price = document.getElementsByName("price");
    let count = document.getElementsByName("count1");

    if (price[0].value < 0 || count[0].value < 0) {
        alert("Вводите целые положительные числа");
    } else if (price[0].value.match(/[.,]/) !== null || count[0].value.match(/[.,]/) !== null) {
        alert("Вводите целые числа");
    } else if (price[0].value.match(/[^0-9]/) !== null || count[0].value.match(/[^0-9]/) !== null) {
        alert("Вводите числа");
    } else {
        const result = Number(price[0].value) * Number(count[0].value);
        let out = "Стоимость покупки: " + result + " денежных единиц";
        document.getElementById("result1").innerHTML = out;
    }
    return false;
}

function calculateAddons(changedVal) {
    console.log(changedVal);
    let count = document.getElementById("count2");
    let options = document.getElementsByName("options")[0];
    if (count.value < 0) {
        alert("Количество товара не может быть отрицательным");
    } else if (count.value.match(/[.,]/) !== null) {
        alert("Количество товара должно быть целым");
    } else if (count.value.match(/[^0-9]/) !== null) {
        alert("Вводите число");
    } else {
        let result;
        if (options.value === "1") {
            result = Number(count.value) * 1000;
        } else if (options.value === "2") {
            if (changedVal === "d1") {
                result = Number(count.value) * 800;
            } else if (changedVal === "d2") {
                result = Number(count.value) * 1200;
            } else if (changedVal === "d3") {
                result = Number(count.value) * 1800;
            }
        } else if (options.value === "3") {
            if (changedVal) {
                result = Number(count.value) * 2700;
            } else {
                result = Number(count.value) * 2000;
            }
        }
        let out = "Стоимость покупки: " + result + " денежных единиц";
        document.getElementById("result2").innerHTML = out;
    }
    return false;
}
