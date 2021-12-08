window.addEventListener("DOMContentLoaded", function () {
    let b1 = document.getElementById("showForm");
    b1.addEventListener("click", function () {
        history.pushState({page: 1}, "", "?feedback");
        setFields();
        showForm();
    });
    let b2 = document.getElementById("hideForm");
    b2.addEventListener("click", hideForm);
    window.addEventListener("popstate", function (event) {
        if (JSON.stringify(event.state) === "{\"page\":1}") {
            showForm();
        }
        else {
            hideForm();
        }
    });
    let s = document.getElementById("feedback");
    s.addEventListener("change", function () {
        window.localStorage.setItem("name", s.name.value);
        window.localStorage.setItem("email", s.email.value);
        window.localStorage.setItem("message", s.message.value);
    });
    s.addEventListener("submit", function () {
        let data = {
            name: s.name.value,
            email: s.email.value,
            message: s.message.value
        };
        document.getElementById("send").style.display = "none";
        fetch("https://api.slapform.com/lNSMnPeWW", {
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(function (response) {
            alert("ok!", response);
        })
        .catch(function (response) {
            alert("fail!", response);
        })
        .finally(function () {
            document.getElementById("send").style.display = "flex";
            hideForm();
            window.localStorage.setItem("name", "");
            window.localStorage.setItem("email", "");
            window.localStorage.setItem("message", "");
            setFields();
        });
    });
});

function showForm () {
    let f = document.getElementById("feedback");
    f.style.display = "flex";
    f.style.flexDirection = "row";
    f.name = window.localStorage.getItem("name");
    f.email = window.localStorage.getItem("email");
    f.message = window.localStorage.getItem("message");
    document.getElementById("showForm").style.display = "none";
    return false;
}

function hideForm () {
    document.getElementById("feedback").style.display = "none";
    document.getElementById("showForm").style.display = "block";
    window.history.back();
    return false;
}

function setFields () {
    let f = document.getElementById("feedback");
    f.name = window.localStorage.getItem("name");
    f.email = window.localStorage.getItem("email");
    f.message = window.localStorage.getItem("message");
}
