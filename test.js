const l = console.log
const log = l
const Events = require("./")


const events = new Events()
events.on("hey", () => l("hey"))
events.once("once", () => l("once"))
events.emit("once")
    //events.emit("once")

const calc = new Events()
calc.addEventListener("result", (result) => log(result))

calc.addEventListener("add", (a, b) => {
    log("Adding " + a + " to " + b)
    calc.emit('result', a + b)
})

calc.addEventListener("subtract", (a, b) => {
    log("Subtracting " + a + " from " + b)
    calc.emit('result', a - b)
})

calc.emit('add', 1, 2)
calc.emit('subtract', 4, 2)