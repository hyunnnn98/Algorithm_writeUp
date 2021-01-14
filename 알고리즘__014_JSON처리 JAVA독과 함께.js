// 🎃 JSON처리 JAVA독과 함께

// 징검다리를 건넌다
/**
 * 1. 징검다리는 버틸 수 있는 내구도의 한계가 있음.
 * 2. 각 캐릭터의 몸무게, 돌의 내구도, 점프력을 고려하여 다리를 건널 수 있는지 true / false 로 반환.
 * 3. 내구도 0까지는 독의 무개를 버틸 수 있다. ( 0 미만이면 false 반환 )
 * 4. 각 돌에 독들이 착지할 때 -> 돌의 내구도는 몸무게 만큼 줄어든다. 
 * 5. 독들의 점프력이 각자 다름 ( ex. 점프력이 2인 독은 2칸식 점프하여 착지. )
 * 6. 각 독들은 순서대로만 다리를 건넌다.
 */

durability = [5, 3, 4, 1, 3, 8, 3]
doks = [{
    "이름": "루비독",
    "나이": "95년생",
    "점프력": "3",
    "몸무게": "4",
}, {
    "이름": "피치독",
    "나이": "95년생",
    "점프력": "3",
    "몸무게": "3",
}, {
    "이름": "씨-독",
    "나이": "72년생",
    "점프력": "2",
    "몸무게": "1",
}, {
    "이름": "코볼독",
    "나이": "59년생",
    "점프력": "1",
    "몸무게": "1",
},
]

function run(argDoks, argDurability) {
    let succeedDoks = []
    for (v in argDoks) {
        console.log(argDoks[v]['이름'] + " 검증 시작...")
        let name = argDoks[v]['이름']
        let jump = parseInt(argDoks[v]['점프력'])
        let weight = parseInt(argDoks[v]['몸무게'])
        let isSucceed = true
        for (let i = jump - 1; i < argDurability.length; i += jump) {
            // 내구도 감소
            argDurability[i] -= weight
            console.log(`인덱스 ? : ${i} 점프력은 ? : ${jump} 내구도는? ${argDurability[i]}`)

            // 내구도 체크
            if (argDurability[i] < 0) {
                console.log('탈락한 독의 이름은?', name)
                isSucceed = false
                break
            }

        }
        isSucceed ? succeedDoks.push(name) : null
    }

    return succeedDoks
}

console.log('결과는 ?', run(doks, durability))