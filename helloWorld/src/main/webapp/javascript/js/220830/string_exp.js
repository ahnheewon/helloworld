// string_exp.js

let now = new Date();
console.log(now.toDateString()); // Tue Aug 30 2022
console.log(now.toLocaleDateString()); // 2022. 8. 30.
console.log(now.toLocaleTimeString()); // 오후 5:28:16

console.log(`${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`);
//now.getMonth()는 0부터 시작하기 때문에 1을 더한다.


console.log(`${now.getSeconds()<10?'0'+now.getSeconds():now.getSeconds()}`); //삼항연산자
console.log(`0${now.getSeconds()}`.slice(-2))

console.log('abc'.toUpperCase()); // 대문자로
console.log('ABC'.toLowerCase()); // 소문자로

Date.prototype.hhmiss = function() {
    // 시,분,초가 09:08:07 로 나오도록
}

