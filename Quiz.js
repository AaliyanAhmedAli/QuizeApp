let loggedInUser = {};

(() => {

    let item = localStorage.getItem("loggedInUser");

    if (item) loggedInUser = JSON.parse(item);
    else {
        window.location.href = "./index.html"
        return;
    }


    document.querySelector("#email").innerText = loggedInUser.email;

    document.getElementById("name").innerHTML = `Welcome ${loggedInUser.firstName} ${loggedInUser.lastName}`;

})()

function doLogout() {
    localStorage.removeItem("loggedInUser");

    window.location.href = "./index.html";
}
