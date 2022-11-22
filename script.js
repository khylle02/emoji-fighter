let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let indexOfFighter1 = Math.floor(Math.random() * fighters.length)
    console.log(indexOfFighter1) 
    let indexOfFighter2 = Math.floor(Math.random() * fighters.length)
    console.log(indexOfFighter2)
    stageEl.textContent = fighters[indexOfFighter1] + " VS " + fighters[indexOfFighter2];
})

