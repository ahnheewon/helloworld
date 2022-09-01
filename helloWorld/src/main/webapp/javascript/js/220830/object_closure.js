// object_closure.js
// 1.함수는 변수에 대입가능.

let fnc = function () {
    console.log('함수호출!!');
}

// 2.메소드의 매개값으로 대입가능.
let num =[1,2,3];
num.forEach(function (val) {
    console.log(val);
})


// 3. 결과 값으로 함수반환
function outerFunc(name) {
    let saying = name + '안녕!!';

    return function() {
        return saying;
    }

}

let closure1=outerFunc('홍길동'); console.log(closure1);
console.log(closure1());

function initCnt() {
    let cnt =10; //cnt 값 초기화
    /* 원래  let cnt =10; 함수 바깥으로 안빼면
       값이 누적안되고 계속 10으로 고정되는데
       숨기고 싶을 때 closure를 씀.
       addCnt 함수 앞에 return을 붙이면 됨. */
   return function addCnt(){ // initCnt 값을 1씩 누적시키는 함수
        cnt++;
        console.log(cnt);
    }
    //addCnt();
}

let plusCnt=initCnt();

plusCnt();
plusCnt();
plusCnt();
