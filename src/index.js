import('./styles.scss')
  .then(() => {
    console.log('Стили успешно загружены')
  })
  .catch((error) => {
    console.log('Ошибока при загрузке стилей', error)
  })
import navMenu from './BurgerMenu/js/navMenu'

navMenu()
