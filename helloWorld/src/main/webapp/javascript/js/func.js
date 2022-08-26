// func.js

let num = null; // undefined 상태.

console.log(num);
// boolean: 0, null, undefined, '' => false



//함수 표현 방식.
function sum(num1, num2) {
    // if(!num1&&!num2)
    // return num1 + num2; //return undefined.
    // else return 0;
    return num1 + num2;
}

console.log(sum(1, 2)); // 만약 매개 값의 개수가 안맞으면 예)sum(1,2,3) 맞는 개수 만큼만 계산해서 반환.
console.log(sum(1)); // NaN(Not a Number) => 1 + undefined
console.log(sum() + sum(2, 3)) // NaN

console.log(sum);

//함수 표현의 또다른 방식.
sum = function (num1,num2) {
    return num1 + num2;
}
sum(1,2);

let showInfo = function(name) {
    return `안녕하세요 ${name}님.`;
}

console.log(showInfo('홍길동'));

let welcome = showInfo; // 변수가 함수타입..
console.log(welcome('김민수'));

let members = ['노은경','이준의','김민선'];
for (let member of members) {
    console.log(welcome(member));
}
