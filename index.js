const themeSwitcher = document.querySelector('input[type="checkbox"]')
const stylesheet = document.querySelectorAll('link[href]')[2]

themeSwitcher.addEventListener('change', (e) => {
    console.log(e.target.checked)

    if (e.target.checked) {
        stylesheet.setAttribute('href', './css/dark.css')
    } else {
        stylesheet.setAttribute('href', './css/light.css')
    }
})


// window.addEventListener('load', () => {
//     stylesheet.setAttribute('href', './css/light.css')
// })