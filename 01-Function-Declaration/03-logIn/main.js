function login(username, password) {
  if (username === "admin" && password === "P@ssw0rd") {
    alert("Correct");
  } else {
    alert("Incorrect");
  }
}
let user = prompt("Input Your Name");
let pws = prompt("Input Your Password");

login(user, pws);
