const sidemenu = document.querySelector("#sidemenu");

function openMenu() {
  sidemenu.style.transform = "translateX(-16rem)";
}
function closeMenu() {
  sidemenu.style.transform = "translateX(16rem)";
}

function toggleDropdown() {
  let dropdown = document.querySelector("#dropDownButton #dropdown ");
  dropdown.classList.toggle("hidden");
}
