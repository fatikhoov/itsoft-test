const navMenu = () => {
  const eventburgerMenu = (event) => {
    event.preventDefault()
    burgerMenu.classList.toggle('burger-menu')
  }

  const burgerMenu = document.querySelector('.burger-menu')

  document
    .getElementById('burger-button')
    .addEventListener('click', eventburgerMenu)
}

export default navMenu
