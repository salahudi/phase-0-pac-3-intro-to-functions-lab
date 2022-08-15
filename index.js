function shout(string) {
    return string.toUpperCase("hello!");
}
function whisper(string) {
    return string.toLowerCase("hello!");
}
function logShout(string) {
    console.log(string.toUpperCase("hello!"));
}
function logWhisper(string) {
    console.log(string.toLowerCase("hello!"))
}
function sayHiToHeadphonedRoommate(string){
    if (string.toLowerCase() === string){
        return 'I can\'t hear you!'
    }else if (string.toUpperCase() === string){
        return 'YES INDEED!'
}else if (string === "Let's have dinner together!"){
    return 'I would love to!'
}
}   