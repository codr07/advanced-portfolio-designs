/*-------------------------------------------------This script is created by Sankha Saha (CODR)------------------------------------------------------------*/
/*-------------------------------------------------Code © by Sankha Saha (CODR)------------------------------------------------------------*/

let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
