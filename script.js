const cards = document.querySelectorAll('.card')

window.addEventListener('scroll', checkCards)
checkCards()

function checkCards() {
  const triggerBottom = window.innerHeight * 0.88

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top

    if (cardTop < triggerBottom) {
      card.classList.add('show')
    } else {
      card.classList.remove('show')
    }
  })
}
