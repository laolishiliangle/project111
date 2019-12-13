
const tel2 = function (obj) {
    let re = /^1[345789]\d{9}$/
    return re.test(obj)
}

const score = function (obj) {
    let re = /^[1-5]$/; 
    return re.test(obj)
}


export default {
    score,  tel2
}