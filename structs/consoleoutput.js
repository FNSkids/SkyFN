module.exports = {
    log: data => console.log(`[\x1b[31mKorfu\x1b[0m] ${data}\x1b[0m`),
    request: data => console.log(`[\x1b[31mREQUEST\x1b[0m] ${data}\x1b[0m`)
}