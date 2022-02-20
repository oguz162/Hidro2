function successfullMessage(msg) {
    return "✅ *Zlose*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Zlose*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *Zlose*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
