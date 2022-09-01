// loop.js

let numbers = [23, 33, 14, 52, 77, 55, 16];

// 1) for문
// 짝수합 => result.

let result = 0;


for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        result += numbers[i];
    }
}
console.log('짝수합: ' + result);

// 2) foreach 문
result = 0; // 변수 초기화
sum = 0;

numbers.forEach((val) => {
    if (val % 2 == 0) {
        result += val;
    }

})
console.log('짝수합: ' + result);

// 3) 확장 for
result = 0; //변수 초기화

for (num of numbers) {
    if (num % 2 == 0) {
        result += num;
    }
  
}
console.log('짝수합: ' + result);


// foreach 문 index값으로 홀수 찾기 
result = 0; // 변수 초기화

numbers.forEach((val,idx) => {
    if (idx %2==0) { // 홀수번째 순서인
        result += val; // 값의 합 구하기
    }
  
})
console.log('홀수번째 위치인 값의 합: ' + result);

// foreach 문
result = 0; // 변수 초기화
numbers.forEach((val) => {
    if (val>30) { // 홀수번째 순서인
        result += val; // 값의 합 구하기
    }
  
})
console.log('30 보다 큰 값의 합: ' + result);