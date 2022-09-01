// for_test.js

// 1~100 사이의 임의의 수를 생성 => 배열에 저장[5].
// 배열 값 중 최대값을 구하도록 반복문을 작성.
// 큰 값은 콘솔출력. 배열요소는 document.write()

const randomVals = []; //배열선언
var max = 0; // 최대값

for (let i = 0; i < 5; i++) { //배열의 크기가 5가 되도록

    let val = Math.ceil((Math.random() * 99) + 1); // 1~100사이 임의 값 생성
    randomVals[i] = val;

    if (max < randomVals[i]) {
        max = randomVals[i]; //최대값
    }

}
//console.log(randomVals);
document.write(randomVals);
console.log("최대값은 " + max + " 입니다.");

//함수의  스코프 체인.Math
var a = 1;
var b = 5;

function outerFunc() {
    var b; //지역변수 b
    function innerFunc(){
        a = b;
    }
    console.log(a);

    a = 2;
    b = 4;
    innerFunc();
     b = 2;
    console.log(b);
}

outerFunc(); 
console.log(b);
