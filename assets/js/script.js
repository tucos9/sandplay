// Toggle menu
document.getElementById('toggle-menu').onclick = function() {
  var menu = document.getElementById('main-menu-mobile');
  if (menu.style.display == 'block') {
      menu.style.display = 'none';
  }
  else {
      menu.style.display = 'block';
  }
};
document.getElementById('close-menu').onclick = function() {
  var menu = document.getElementById('main-menu-mobile');
  menu.style.display = 'none';
}

var toggle_submenu = function(menuId) {
  var menu = document.getElementById(menuId);
  if (menu.style.display == 'block') {
      menu.style.display = 'none';
  }
  else {
      menu.style.display = 'block';
  }
};
