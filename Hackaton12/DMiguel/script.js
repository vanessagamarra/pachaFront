// Reto 1

function toggleDropdown() {
    var dropdownContent = document.querySelector(".dropdown-menu");
    dropdownContent.classList.toggle("show");
}


// Reto 2
function toggleCollapGroup(identificador = "") {
    const identificar = "."+identificador;
    var collapGroup = document.querySelector(identificar);
    collapGroup.classList.toggle('show');
}
