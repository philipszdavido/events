const l = console.log
const log = l

class Events {
    constructor() {
        this.listeners = {}
    }
    on(str, fn) {
        this.listeners[str] = fn
    }
    emit(str, ...data) {
        this.listeners[str](...data)
    }
    once(str, fn) {
        const self = this

        function onceFn(data) {
            fn(data)
            self.removeEventListener(str)
        }
        this.on(str, onceFn)
            //this.listeners[str] = oncefn
    }
    addEventListener(str, fn) {
        this.on(str, fn)
    }
    removeEventListener(str) {
        delete this.listeners[str]
    }
}


module.exports = Events