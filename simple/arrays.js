
var app = (array, action, param = null) => {
    if(action === "trib") {
        // return [1,1,1,3,5,9,17,31,57,105]
        let out = array
        if (param === 0) {
            return []
        }
        else if (param === 1) {
            return [array[0]]
        }
        else if (param === 2) {
            return [array[0], array[1]]
        }
        for (i = 0; array.length < param ; i++)
            out.push(out
                .slice(-3)
                .reduce((a,b)=>(a+b)))
        return out
    }
    else {
        return -1
    }
}

module.exports = app;
