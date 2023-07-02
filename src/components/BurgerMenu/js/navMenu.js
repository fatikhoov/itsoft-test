const navMenu = () => {
  const burgerMenu = document.querySelector('.nav__wrapper')
  const footerWrapper = document.querySelector('.footer__wrapper')

  const eventburgerMenu = (event) => {
    event.preventDefault()
    burgerMenu.classList.toggle('nav__wrapper-open')
    if (burgerMenu.classList.contains('nav__wrapper-open')) {
      document.body.style.overflow = 'hidden'
      document.querySelector('.menu-logo-1').classList.add('menu-logo-close')
      document.querySelector('.menu-logo-2').classList.remove('menu-logo-close')
    } else {
      document.body.style.overflow = ''
      document.querySelector('.menu-logo-2').classList.add('menu-logo-close')
      document.querySelector('.menu-logo-1').classList.remove('menu-logo-close')
    }
  }
  const eventDisclamerClose = (event) => {
    event.preventDefault()
    footerWrapper.classList.toggle('footer__wrapper-close')
  }

  document.querySelectorAll('.button-burger-open').forEach((el) => {
    el.addEventListener('click', eventburgerMenu)
  })
  document
    .querySelector('.disclamer-close')
    .addEventListener('click', eventDisclamerClose)
}

export default navMenu
