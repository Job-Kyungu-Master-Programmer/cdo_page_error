let openMenu = document.querySelector('#openMenu');
let closeMenu = document.querySelector('#closeMenu');
let navbarHeader = document.querySelector('#navbarHeader');



openMenu.addEventListener('click' , () => {
           document.querySelector('#navbarHeader').style.marginLeft = "100%";
});

closeMenu.addEventListener('click', () => {
          document.querySelector('#navbarHeader').style.marginLeft = "-100%";
});

