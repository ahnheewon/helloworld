// variable.js
var age; //undefined. ->호이스팅
//var 전역객체의 변수



let fname = 'Hong'; // 변수선언. 전역변수 / 지역변수 / 블락레벨변수.
fname = 'Hwang';
console.log(fname);


const PI=3.14; // 상수선언 -> 재할당 불가.
//PI=1.23;

// let 또는 const는 선언 후에 사용가능.


console.log(age);
age = 20; 

function localFnc() {
  //  var age = 30; // 지역변수. (이 함수 안에서의 함수.)
    age = 30; // 이렇게 =표현하면 전역변수.
    console.log('지역변수'+age);
}

localFnc();

{ //중괄호를 이용해서 지역변수로 표기.
    let fname = 'Park';
    console.log(fname);

    var age=22; //전역변수. 에러 X -> 위험도 ↑
    //var는 중괄호의 의미가 없다.
}


console.log('전역변수: '+age);
console.log('전역변수: '+fname);

console.log(window);