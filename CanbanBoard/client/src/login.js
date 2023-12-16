const form = document.getElementById("login-form");
const nicknameInput = document.getElementById("login-nickname")
const passwordInput = document.getElementById("login-pass")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nickname = nicknameInput.value
    const password = passwordInput.value

    nicknameInput.value = "";
    passwordInput.value = ""

    console.log(nickname, password)

    // TODO here check correctness
    // localStorage.setItem("user", undefined)
    // window.alert("wrong login or password")
    // return

    localStorage.setItem("user", nickname)
    window.location.replace("./board")
});
