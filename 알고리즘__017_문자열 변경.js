function solution(s, n) {
    let argAlphas = s.split('')
    console.log(argAlphas)
    // validation 1
    if (n < 1 || n > 25 || argAlphas.length > 8000) {
        console.log("예외 처리")
        return;
    }

    let resultArr = []

    // 결과 반영 + validation 2
    argAlphas.map(alpabet => {
        let alpha = alpabet.charCodeAt()
        if (!('a'.charCodeAt() <= alpha && alpha <= 'z'.charCodeAt() ||
            'A'.charCodeAt() <= alpha && alpha <= 'Z'.charCodeAt() ||
            alpha === ' '.charCodeAt())
        ) {
            return ;
        }

        // n 값을 더한 새로운 문자
        let renew = alpha + n

        if ('a'.charCodeAt() <= alpha && alpha <= 'z'.charCodeAt()) {
            if (renew > 'z'.charCodeAt()) {
                return resultArr.push(String.fromCharCode(renew - 26))
            }
            return resultArr.push(String.fromCharCode(renew))
        } else if ('A'.charCodeAt() <= alpha && alpha <= 'Z'.charCodeAt()) {
            if (renew > 'Z'.charCodeAt()) {
                return resultArr.push(String.fromCharCode(renew - 26))
            }
            return resultArr.push(String.fromCharCode(renew))
        }

        // 공백은 아무리 밀어도 공백 조건 반영
        return resultArr.push(' ')
    })

    return resultArr.join('')
}