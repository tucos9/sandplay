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
  if (menuId == 'submenu_despre') {
      var menuId2 = 'submenu_servicii';
  }
  else {
      var menuId2 = 'submenu_despre';
  }
  document.getElementById(menuId2).style.display = 'none';
 };

 var untoggle_submenus = function(event) {
    if (event.target.nodeName != "LI")
    {
        var menu = document.getElementById('submenu_despre');
        if (menu.style.display == 'block') {
            menu.style.display = 'none';
        }
        var menu = document.getElementById('submenu_servicii');
        if (menu.style.display == 'block') {
            menu.style.display = 'none';
        }
    }
 }
