// variable_ref.js

// 원시형 vs. 참조형

let str1 = 'Hello'; // string
let str2 = new String('Hello'); // object 

console.log(str1 == str2); // 값을 비교.
console.log(str1 === str2); // 값과 타입 비교.

let num1 = 20; // number

let num2 = new Number(20); // object

console.log(num1 == num2);

let obj; // undefined.
obj = null; // null.

let sym1 = Symbol('symbol'); // unique 키 값을 생성.
let sym2 = Symbol('symbol'); //
console.log(sym1 == sym2);

// 객체(object)
obj = {
    sname: 'Hong', // 속성: 속성값
    age: 20,
    showAge: function () {
        console.log('나이는 ' + this.age + ' 입니다.');
    } // 메소드
}

console.log(obj.sname);
console.log(obj['age']);
obj.showAge();

obj.sname = 'Hwang'; // 값 할당.

//배열
const numbers = []; // new Array();
numbers[numbers.length] = 10; // 추가.
numbers[numbers.length] = 20; // 추가.
numbers[numbers.length] = 30; // 추가.

numbers.forEach(function (val) {
    console.log(val);
}); // 메소드(콜백함수(값,인덱스,배열))

const randomVals = [];
for (let i = 0; i < 5; i++) {
    /* Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 
          가장 작은 숫자를 integer 로 반환합니다.*/
    let val = Math.ceil(Math.random() * 10); // 0~10 임의 값을 생성.
    randomVals[i] = val;

}

console.clear(); //콘솔 메세지 초기화.

randomVals.forEach(function (val) {
    if (val > 5) {
        console.log(val);
    }

});

// 21~50 까지의 임의 값을 생성해보기.

/*  splice() 메소드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여
    배열의 내용을 변경한다. 이 메소드는 원본 배열 자체를 수정한다.
*/
randomVals.splice(0, randomVals.length); // 배열 값 초기화 -> 새 값을 담을 수 있음.
//console.log(randomVals);

for (let i = 0; i < 5; i++) {
    randomVals[i] = Math.ceil(Math.random() * 30) + 20;
}
console.log(randomVals);

console.clear(); //콘솔 메세지 초기화.
randomVals.forEach(showEven); // 짝수만 출력.

//콜백함수 (callback function).
function showEven(val) {
    if (val % 2 == 0) {
        console.log(val);
    }

}
// P.31
console.log(-'3' + 4); //'34' : 숫자형 변환.
console.log((3).toString());
console.log(Math.abs(-20)); // 절대값
console.log(Math.sign(-30)); // 부호 값이 1이면 양수, -1이면 음수, 0이면 0

const arr2 = [-3, 2, -45, 0, 4, 7];
const arr3 =arr2.map(function(val){
    return Math.sign(val);
}) // arr2.map() 배열의 개수 만큼 콜백함수 실행. => 새로운 배열 반환.
console.log(arr3);

//NaN, Infinity
console.log(3/'five');
console.log(-1/0);