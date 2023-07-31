var name = prompt("Please enter your name", "Ashraful");

if (name != null) {
  document.getElementById("gretting")
    .innerHTML = "Hello " + name + "! Nice to see you!";
}