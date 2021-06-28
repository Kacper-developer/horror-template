function hamburger(){


    var hamburger = document.getElementById('burger')
    var hamburgerMenu = document.getElementById('hamburgermenu')

if(hamburger.checked){
    hamburgerMenu.style.left = '0'
} else {
    hamburgerMenu.style.left = '-100vw'
}


}

