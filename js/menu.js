
// var buttons = 2;
var open0 = false;
var open1 = false;

window.onload = function(event) {
  /*
  for (var i = 0; i < buttons; ++i) {
    var id_str = "dropbtn" + i;
    var id = '';
    id += i;

    if ($(window).width () < 960) {
      // mobile
      document.getElementById(id_str).addEventListener("click", function() {
        toggleMenu(id);
      });
    } else {
      // desktop
      document.getElementById(id_str).addEventListener("mouseover", function() {
        openMenu(id);
      });
      document.getElementById(id_str).addEventListener("mouseout", function() {
        closeMenu(id);
      });
    }
  }*/

  if ($(window).width () < 960) {
    // mobile
    document.getElementById('dropbtn0').addEventListener("click", function() {
      toggleMenu('0');
    });
    document.getElementById('dropbtn1').addEventListener("click", function() {
      toggleMenu('1');
    });
  } else {
    // desktop
    document.getElementById('dropbtn0').addEventListener("mouseover", function() {
      openMenu('0');
    });
    document.getElementById('dropbtn0').addEventListener("mouseout", function() {
      closeMenu('0');
    });
    document.getElementById('dropbtn1').addEventListener("mouseover", function() {
      openMenu('1');
    });
    document.getElementById('dropbtn1').addEventListener("mouseout", function() {
      closeMenu('1');
    });
  }

}

function toggleMenu(id) {
  console.log("toggleMenu called with id: " + id);
  if (window['open' + id]) {
    closeMenu(id);
  } else {
    openMenu(id);
  }
}

function openMenu(id) {
  var name = 'dropdowns' + id;
  console.log("openMenu called with name: " + name);

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
  if (event.target.className != 'dropbtn') {
    closeMenu('0');
    closeMenu('1');
  }
}
