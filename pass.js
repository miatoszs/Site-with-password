var password;
var passw = ("PASSWORD_HERE");
password=prompt("Please enter the password.");
if (password == passw) {
    alert("The password is correct. Pres ok to view the webpage");
}
    else {
        window.location = ("failed.html");
};
