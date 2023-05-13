const screens = document.querySelectorAll(".screen")
const timeList = document.querySelector("#timelist")
const startButton = document.querySelector("#start")

let time = 0
let score = 0

startButton.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add("up")
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('timebtn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add("up")
        console.log("time", time)
    }
})
