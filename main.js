const button = document.querySelector('.button')
const nav = document.querySelector('.nav')
const buttonAbout = document.querySelector('.button_about')
const buttonProduct = document.querySelector('.button_product')

button.addEventListener('click', () => {
    nav.classList.toggle('activo')
})
buttonAbout.addEventListener('click', () => {
    alert("esta función no esta disponible ahora ")
})

buttonProduct.addEventListener('click', () => {
    alert("No alejes tu vista  ¡que te pierdes su brillo!")
})