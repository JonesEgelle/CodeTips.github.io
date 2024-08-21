function toggleDropdown() {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("hidden");
}

function toggleMobileDropdown() {
  const dropdown = document.getElementById("mobileDropdown");
  dropdown.classList.toggle("hidden");
}
function openMenu() {
  document.getElementById("sidemenu").classList.remove("right-[-256px]");
  document.getElementById("sidemenu").classList.add("right-0");
}

function closeMenu() {
  document.getElementById("sidemenu").classList.remove("right-0");
  document.getElementById("sidemenu").classList.add("right-[-256px]");
}
