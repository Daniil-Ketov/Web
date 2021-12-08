window.addEventListener("DOMContentLoaded", function () {
    let b1 = document.getElementById("showForm");
    b1.addEventListener("click", showForm);
    let b2 = document.getElementById("hideForm");
    b2.addEventListener("click", hideForm);
    window.addEventListener("popstate", function (event) {
        if (JSON.stringify(event.state) === "{\"page\":1}") {
            showForm();
        } else {
            hideForm();
        }
    });
    let s = document.getElementById("feedback");
    s.addEventListener("change", function () {
        window.localStorage.setItem("name", s.name.value);
        window.localStorage.setItem("email", s.email.value);
        window.localStorage.setItem("message", s.message.value);
        window.localStorage.setItem("agree", s.agree.checked);
    });
    s.addEventListener("submit", function () {
        let data = {
            email: s.email.value,
            message: s.message.value,
            name: s.name.value
        };
        document.getElementById("send").style.display = "none";
        fetch("https://api.slapform.com/lNSMnPeWW", {
            body: JSON.stringify(data),
            method: "POST"
        }).then(function (response) {
            alert("ok!", response);
        }).catch(function (response) {
            alert("fail!", response);
        }).finally(function () {
            window.localStorage.setItem("name", "");
            window.localStorage.setItem("email", "");
            window.localStorage.setItem("message", "");
            window.localStorage.setItem("agree", "");
            document.getElementById("send").style.display = "flex";
            setFields();
            hideForm();
        });
    });
});

function showForm() {
    let f = document.getElementById("feedback");
    f.style.display = "flex";
    f.style.flexDirection = "row";
    document.getElementById("showForm").style.display = "none";
    history.pushState({page: 1}, "", "?feedback");
    return false;
}

function hideForm() {
    document.getElementById("feedback").style.display = "none";
    document.getElementById("showForm").style.display = "block";
    window.history.replaceState({page: 0}, "", "index.html");
    return false;
}

function setFields() {
    let f = document.getElementById("feedback");
    f.name.value = window.localStorage.getItem("name");
    f.email.value = window.localStorage.getItem("email");
    f.message.value = window.localStorage.getItem("message");
    f.agree.checked = window.localStorage.getItem("agree");
}
