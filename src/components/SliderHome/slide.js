const initSlider = () => {
  const slides = document.querySelectorAll('.slider-item')
  let countSlide = 0

  const eventButtonMove = (event) => {
    event.preventDefault()
    const ind = event.target.closest('.button-move-slide').dataset.move
    if (ind === '+' && countSlide < 2) {
      countSlide += 1
      slides[countSlide - 1].classList.remove('active')
      slides[countSlide].classList.add('active')
      console.log(slides.length)
    } else if (ind === '+' && countSlide === 2) {
      slides[countSlide].classList.remove('active')
      slides[0].classList.add('active')
      countSlide = 0
    } else if (ind === '-' && countSlide > 0) {
      countSlide -= 1
      slides[countSlide + 1].classList.remove('active')
      slides[countSlide].classList.add('active')
    } else if (ind === '-' && countSlide === 0) {
      slides[countSlide].classList.remove('active')
      slides[2].classList.add('active')
      countSlide = 2
    }
  }

  document.querySelectorAll('.button-move-slide').forEach((el) => {
    el.addEventListener('click', eventButtonMove)
  })
}

export default initSlider
