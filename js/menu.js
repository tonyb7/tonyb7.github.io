
var open0 = false;
var open1 = false;

function toggleMenu(id) {
  if (window['open' + id]) {
    closeMenu(id);
  } else {
    openMenu(id);
  }
}

function openMenu(id) {
  var name = 'dropdowns' + id;
  var dropdownMenu = document.getElementById(name);
  if (!dropdownMenu.classList.contains('show')) {
    dropdownMenu.classList.add('show');
  }
  window['open' + id] = true;
}

function closeMenu(id) {
  var name = 'dropdowns' + id;
  var dropdownMenu = document.getElementById(name);
  if (dropdownMenu.classList.contains('show')) {
    dropdownMenu.classList.remove('show');
  }
  window['open' + id] = false;
}

window.onclick = function(event) {
  if (!event.target.matches('dropbtn')) {
    closeMenu('0');
    closeMenu('1');
  }
}
