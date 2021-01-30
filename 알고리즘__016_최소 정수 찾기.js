
/**
 * 
 * function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
 */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // sorting

    A.sort(function (a, b) {
        return a - b;
    });
    let answer = 0

    for (let i = 0; i < A.length; i++) {
        if (A[i] > 100000 || A[i] < -100000) {
            return 1
        }
        if (answer <= 0 && answer < A[i]) {
            answer = A[i]
        } else if (answer > 0 && answer < A[i] && answer + 1 == A[i]) {
            answer = A[i]
        }
    }

    return answer + 1
}

console.log(solution([94]))