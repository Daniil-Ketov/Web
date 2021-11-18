window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("showForm");
    b.addEventListener("click", function () {
        history.pushState({page: 1}, "", "?feedback");
        showForm();
    });
    window.addEventListener("popstate", function (event) {
        if (JSON.stringify(event.state) === "{\"page\":1}") {
            showForm();
        }
        else {
            hideForm();
        }
    });
    let s = document.getElementById("feedback");
    s.addEventListener("submit", function (event) {
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
        });
    });
});

function showForm () {
    document.getElementById("feedback").style.display = "flex";
    document.getElementById("feedback").style.flexDirection = "column";
    document.getElementById("showForm").style.display = "none";
    return false;
}

function hideForm () {
    document.getElementById("feedback").style.display = "none";
    document.getElementById("showForm").style.display = "block";
    return false;
}
