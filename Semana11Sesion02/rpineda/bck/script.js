let div = document.getElementById("myIdDiv")
div.style.fontFamily = "system-ui"

let div2 = document.getElementsByClassName("myClassDiv")
//div2[0].style.backgroundColor = ""
div2[0].style.border = "thick solid #0000FF";

const form = document.getElementById("formPrueba")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  if(nombre=="" & apellido == "")
  {
    // label = document.getElementById("errorForm")
    // label.innerText = "Hubo un error"
    // label.style.color = "red"
    label = document.getElementById("error")
    label.classList.add("error")
    label.style.display = "block"
  }
  console.log(form)
});