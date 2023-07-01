const navMenu = () => {
  const burgerMenu = document.querySelector('.nav__wrapper')
  const footerWrapper = document.querySelector('.footer__wrapper')

  const eventburgerMenu = (event) => {
    event.preventDefault()
    burgerMenu.classList.toggle('nav__wrapper-open')
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
