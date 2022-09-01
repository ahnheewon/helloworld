// string_object.js

// 메소드: trim() > trimStart() > trimEnd()
// 메소드: replace(a, b) : a문자를 b문자 변환.
// 정규표현식: replace(/\s+/, '표현값' )
// 메소드: split('구분자') => 문자열을 배열생성.
// 메소드: join('구분자') => 배열 -> 문자열



let str1 = 'Hello';
let str2 = new String('Hello');

console.log(str1, str2, str1 == str2,str1===str2);
console.log(str1.substring(0, 3));


// String => string 
console.log(typeof str2.valueOf()); // 객체 -> 기본타입

let result1 = '1 + 2 * 3';
let result2 = eval(new String('1 + 2 * 3'));
//console.log(eval(result1));
//console.log(result2);

let trimStr='  앞뒤 공백을 제거하는 메소 드   ';
//console.log(trimStr.trim()); // 앞뒤 공백 제거
//console.log(trimStr.trimStart().trimEnd()); // 앞 공백만 제거 후 뒤 공백도 제거 됨.

// String 객체의 메소드 추가 정의.

let obj = {}; // new Object()
let ary = []; // new Array();
let regExp = /\s+$/; // new RegExp();

String.prototype.ltrim= function() {
   return this.replace(/^\s+/, '');
}
String.prototype.rtrim= function() {
    return this.replace(regExp, '');
 }
console.log(trimStr.ltrim());
console.log(trimStr.rtrim());

trimStr = '    how are you    to  day everyone . ';
console.log(trimStr.trim().replace(/\s+/g,' '));

const trimAry = trimStr.trim().split(' ');

const filAry = trimAry.filter(function(str){ // filter()  값이 ''인 배열 삭제하는 필터메소드
    return str != ''; // ''삭제
});

console.log(trimAry);
console.log(filAry);
console.log(filAry.join(' '));


const str = 'The quick brown fox jumps over the lazy dog.';
const strAry = str.split(' ');
//split() 지정한 문자로 끊어서 단어를 배열에 담음. (자주 사용.) (문자열 -> 배열)
console.log(strAry);
console.log(strAry.join('-'));
//join() 반대로 배열 타입을 -로 엮어서 문자열 타입으로 변환 (배열-> 문자열)

