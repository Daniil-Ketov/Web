window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("showForm");
    b.addEventListener("click", function () {
        history.pushState({page: 1}, "", "?feedback");
        document.getElementById("feedback").style.display = "flex";
        document.getElementById("feedback").style.flexDirection = "column";
        document.getElementById("showForm").style.display = "none";
    });
    window.addEventListener("popstate", function (event) {
        if (JSON.stringify(event.state) === "{\"page\":1}") {
            document.getElementById("feedback").style.display = "flex";
            document.getElementById("feedback").style.flexDirection = "column";
            document.getElementById("showForm").style.display = "none";
        }
        else {
            document.getElementById("feedback").style.display = "none";
            document.getElementById("showForm").style.display = "block";
        }
    });
    let s = document.getElementById("feedback");
    s.addEventListener("submit", function (event) {
        let data = {
            name: s.name.value,
            email: s.email.value,
            message: s.message.value
        };
        let response = fetch("https://api.slapform.com/lNSMnPeWW", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            let result = response.json();
            alert(result.message);
        }
    });
});
