function successfullMessage(msg) {
    return "β *Zlose*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *Zlose*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *Zlose*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
