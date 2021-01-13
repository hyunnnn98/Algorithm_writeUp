// 🎃 이진연산, 인코딩을 개념을 황용한 암호해독
let data = [
    '   + -- + - + -   ',
    '   + --- + - +   ',
    '   + -- + - + -   ',
    '   + - + - + - +   '
]

function decryptionRun(decryptionString) {
    console.log(decryptionString)
    let result = []
    for (variable of decryptionString) {
        convertedByDecimal = parseInt(variable.replace(/ /g, '').replace(/\+/g, 1).replace(/-/g, 0), 2)
        convertedByString = String.fromCharCode(convertedByDecimal)
        
        result.push(convertedByString)
    }

    return result.join('')
}


console.log(decryptionRun(data))
