// function_param.js
// 함수 호이스팅.
function myFunc(param) { //parameter
    console.log('Hello!!' + param);
}

function myFunc2(param1, param2) {
    console.log(param1 + param2);
}

//함수 선언식.
myFunc('world'); // arqument
myFunc2('welcome ', 'Home!!');

//함수 표현식.
let myFunc3 = function (param) {
    document.write('<p>Hello, ' + param + '</p>');
}

myFunc3('홍길동'); // 함수 실행.

let myFunc4 = myFunc3;
myFunc4('World');

function mySum() {
    let sum = 0;
    console.log(arguments); // arguments 변수의 수에 상관없이 실행가능.
    // console.log(n1+n2);   
    for (let num of arguments)
        sum += num;
    console.log(sum);
}

mySum(1, 2, 3, 4);

// 화살표함수.
function mySum5(a, b) {
    console.log(a + b);
}

// forEach메소드의 매개값으로 화살표함수를 사용
['Hello', 'World'].forEach((val, idx) => console.log(val, idx));
