//Element selectors

// let heading = document.querySelector(".lolo")

// heading.innerHTML = "Something"

let s = document.getElementsByTagName("li")
s[0].style.backgroundColor = "green"

let elements = document.querySelectorAll("li")
elements.forEach( value => {
    value.style.backgroundColor = "lightgreen"
})