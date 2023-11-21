const wrapper = document.querySelector(".wrapper")

for (let i = 0; i < 5; i++){
    let novyDiv = document.createElement("div")                 //vytvoří nový div
    novyDiv.classList.add("square")                             //přidanému divu přiřadí classu
    wrapper.appendChild(novyDiv)                                //a přidá se do default divu (v našem případě wrapper)
    
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    
    novyDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`     //obarvení pozadí
}


