const animation = document.querySelector(".layer-1")
const animation1 = document.querySelector(".layer-2")
const animation2 = document.querySelector(".layer-4")
const animation3 = document.querySelector(".layer-6")
const reset = document.querySelector("button")

const checks = document.querySelectorAll("input[type='checkbox']")
let initial = 0;

checks.forEach( check => {
    check.addEventListener("change", increment)
})


function increment () {
    initial++
    if (initial == 4) {
        animation.classList.add("counter-reset")
        animation1.classList.add("counter-reset")
        animation2.classList.add("counter-reset")
        animation3.classList.add("counter-reset")
        checks.forEach( check => {
            check.removeEventListener("change", increment)
        })
    }
    document.getElementById("value").innerHTML = initial
}

reset.addEventListener("click", () => {
    location.reload()
})

