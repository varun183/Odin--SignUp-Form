console.log("whatever");

let error = document.querySelector("#error");
let submit = document.querySelector("button");

submit.addEventListener('click', function (e) {
    e.preventDefault();

    let userPassword = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirm-password").value;

    if (userPassword !== confirmPassword) {
        error.textContent = "*Passwords do not match";
    }
});
