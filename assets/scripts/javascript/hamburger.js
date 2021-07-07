function hamburger(){


    var hamburger = document.getElementById('burger')
    var hamburgerMenu = document.getElementById('hamburgermenu')
    var navigation = document.querySelector('.navbar')

if(hamburger.checked){
    
  hamburgerMenu.style.height = 'auto'
  hamburgerMenu.style.padding = '20px 0'
  hamburgerMenu.style.display = 'flex'

  navigation.style.background = '#fff'
    
} else {
    
  hamburgerMenu.style.height = '0'
  hamburgerMenu.style.padding = '0px 0'
  hamburgerMenu.style.display = 'none'

  navigation.style.background = 'transparent'
    
}


}

