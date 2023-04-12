
var app = (str, action) => {
    if(action === "reverse") {
        return str.split("").reverse().join("")
    }
    else {
        return -1
    }
}

module.exports = app;
