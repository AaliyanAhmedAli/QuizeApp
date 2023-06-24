let users = [];

(() => {

  let item = localStorage.getItem("users");

  if (item) users = JSON.parse(item);


  let loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    window.location.href = "./Quiz.html"
    return;
  }

})()

function doLogin(e) {
        e.preventDefault();

        let email = document.querySelector("#Email").value;
        let password = document.querySelector("#Password").value;


        

        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                isFound = true;

                if (users[i].password === password) {
                    localStorage.setItem("loggedInUser", JSON.stringify(users[i]));

                    window.location.href = "./Quiz.html"


                    break;
                } else {
                    document.querySelector("#error").innerText = "Incorrect password";
                    return;
                }
            }
        }
        if (!isFound) {
            document.querySelector("#error").innerText = "user not found";
            return;
        }

        setTimeout(() => {
            document.querySelector("#error").innerText = "";
        }, 5000);

        e.target.reset();
    }
