import('./styles.scss')
  .then(() => {
    console.log('Стили успешно загружены')
  })
  .catch((error) => {
    console.log('Ошибока при загрузке стилей', error)
  })
import navMenu from './components/BurgerMenu/js/navMenu'
import initSlider from './components/SliderHome/slide'

navMenu()
initSlider()
