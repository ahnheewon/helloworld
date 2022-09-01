// array_basic.js
// 배열에 요소 추가 및 삭제
// push() : 마지막 추가. pop() : 마지막 제거
// unshift() : 첫번째 추가. shift() 첫번째 제거

// slice(firstindex, lastindex); lastindex는 미포함. lastindex-1 까지
// splice(위치, 대체할 갯수, )


const names = [];

names[0] = '정다슬';
names[names.length] = '백진희';
names[names.length] = '황용주';
names[names.length] = '손정빈';

// names.push('김아현'); // 마지막 추가

// names.pop(); // 후입 선출 '김아현' 제거됨.

// names.shift(); // 선입 선출 '정다슬' 제거됨.

// names.unshift('손정빈'); // 첫번째 추가

// splice: 추가. 수정. 삭제
names.splice(0,0,'김민지','노은경','진정욱'); //  names[0]부터 [0] 그 뒤에 추가 -> 첫번째 추가
names.splice(0,3,'test1','test2','test3'); // 
names.length=0; // 크기를 지정.


const newNames = names.slice(0, names.length); // 배열에 slice를 쓰면?
console.log(newNames); // names[0]부터 [1]까지 가져옴.



names.forEach(name => {
    console.log(name);
})


const otherName = names.concat(newNames); // 두 배열을 합치기.
console.log(otherName);

names.length=0; // 크기를 지정.