let isOpen = false;

const showMenu = ()=>{
  document.querySelector('.mobileMenu').style.visibility = 'visible'
  document.querySelector('.mobileMenu').style.display = 'flex'
  document.querySelector('.mobileMenuIcon').classList.remove('fa-bars')
  document.querySelector('.mobileMenuIcon').classList.add('fa-times')
}

const hideMenu = ()=>{
  document.querySelector('.mobileMenu').style.visibility = 'hidden'
  document.querySelector('.mobileMenu').style.display = 'none'
  document.querySelector('.mobileMenuIcon').classList.remove('fa-times')
  document.querySelector('.mobileMenuIcon').classList.add('fa-bars')
}

const toggleNav = ()=>{
  isOpen = !isOpen;

  if(isOpen){
    showMenu()
  }else{
    hideMenu()
  }

}

const btn = document.querySelector('.mobileMenuIcon');
btn.addEventListener('click', (e)=>{
  e.preventDefault();
  toggleNav();
})

const mainWrapper = document.querySelector('.main-wrapper')
mainWrapper.addEventListener('click', (e)=>{
  isOpen = false;
  e.preventDefault();
  hideMenu();
})