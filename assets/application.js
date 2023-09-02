// Put your application javascript here
const url = document.querySelector(".url")
console.log(url)

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {

    document.querySelector(".url").style.display = "block";
    document.querySelector(".url").style.color = "red";
  }, 2000);
  // Tu código para mostrar el elemento aquí
});