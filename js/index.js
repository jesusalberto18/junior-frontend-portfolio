/*

This script creates a toggle menu that displays on screen when the screen
width reaches <= 700px.

*/

document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('show');
});