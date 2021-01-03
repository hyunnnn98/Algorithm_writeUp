# Algorithm_writeUp
알고리즘 공부간에 경험했던 내용 정리

## 자바스크립트 기본 지식
<br>

### 소수점 관리
```javascript
    Math.ceil()  : 소수점 올림
    Math.floor() : 소수점 버림
    Math.round() : 소수점 반올림
```

### String값 역으로 출력하기
```javascript
    let result = "요세하녕안"

    let reversedResult = result.split('').reverse().join('')
    // 안녕하세요
```

> 재귀함수는 항상 끝을 생각하고 문제를 풀어야 한다.<br>
> 끝이 없으면 무한 반복에 빠지기 때문에 설계단계에서 조심하자.