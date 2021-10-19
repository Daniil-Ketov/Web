window.addEventListener('DOMContentLoaded', function (event) {
    let o = document.getElementsByName("options");
    let delivery;
    let package;
    o[0].addEventListener("change", function(event) {
        let deliveries = document.getElementById("deliveries");
        let package = document.getElementById("package");
        let options = event.target;
        console.log(options.value);
        if (options.value == "1") {
            deliveries.style.display = "none";
            package.style.display = "none";
            calculateAddons();
        }
        else if (options.value == "2") {
            deliveries.style.display = "flex";
            package.style.display = "none";
            calculateAddons("d1");
        }
        else if (options.value == "3") {
            deliveries.style.display = "none";
            package.style.display = "flex";
            calculateAddons(package.checked);
        }
    });

    let d = document.querySelectorAll(".deliveries input[type=radio]");
    d.forEach(function(radio) {
        radio.addEventListener("change", function(event) {
            let d = event.target;
            console.log(d.value);
            delivery = d.value;
            calculateAddons(d.value);
        });
    });
    
    let p = document.getElementById("package");
    p.addEventListener("change", function (event) {
        let p = event.target;
        console.log(p.checked);
        package = p.checked;
        calculateAddons(p.checked);
    });
    
    let c = document.getElementById("count2");
    c.addEventListener("change", function (event) {
        let c = event.target;
        console.log(c.value);
        if (document.getElementsByName("options")[0].value == "2") {
            calculateAddons(delivery);
        }
        else if (document.getElementsByName("options")[0].value == "3") {
            calculateAddons(package);
        }
    })
});

function calculate() {
    let price = document.getElementsByName("price");
    let count = document.getElementsByName("count1");

    if (price[0].value < 0 || count[0].value < 0) {
        alert("Вводите целые положительные числа");
    }
    else if (price[0].value.match(/[.,]/) != null || count[0].value.match(/[.,]/) != null) {
        alert("Вводите целые числа");
    }
    else if (price[0].value.match(/[^0-9]/) != null || count[0].value.match(/[^0-9]/) != null) {
        alert("Вводите числа");
    }
    else {
        const result = Number(price[0].value) * Number(count[0].value);
        document.getElementById("result1").innerHTML = "Стоимость покупки: " + result + " денежных единиц";
    }
    return false;
}

function calculateAddons(changedVal) {
    console.log(changedVal);
    let count = document.getElementById("count2");
    let options = document.getElementsByName("options")[0];
    if (count.value < 0) {
        alert("Количество товара не может быть отрицательным");
    }
    else if (count.value.match(/[.,]/) != null) {
        alert("Количество товара должно быть целым");
    }
    else if (count.value.match(/[^0-9]/) != null) {
        alert("Вводите число");
    }
    else {
        if (options.value == "1") {
            const result = Number(count.value) * 1000;
            document.getElementById("result2").innerHTML = "Стоимость покупки: " + result + " денежных единиц";
        }
        else if (options.value == "2") {
            if (changedVal == "d1") {
                const result = Number(count.value) * 800;
                document.getElementById("result2").innerHTML = "Стоимость покупки: " + result + " денежных единиц";
            }
            else if (changedVal == "d2") {
                const result = Number(count.value) * 1200;
                document.getElementById("result2").innerHTML = "Стоимость покупки: " + result + " денежных единиц";
            }
            else if (changedVal == "d3") {
                const result = Number(count.value) * 1800;
                document.getElementById("result2").innerHTML = "Стоимость покупки: " + result + " денежных единиц";
            }
        }
        else if (options.value == "3") {
            if (changedVal) {
                const result = Number(count.value) * 2700;
                document.getElementById("result2").innerHTML = "Стоимость покупки: " + result + " денежных единиц";
            }
            else {
                const result = Number(count.value) * 2000;
                document.getElementById("result2").innerHTML = "Стоимость покупки: " + result + " денежных единиц";
            }
        }
    }
    return false;
}
