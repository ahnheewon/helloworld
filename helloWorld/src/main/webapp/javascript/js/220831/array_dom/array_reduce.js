// array_reduce.js

const numbers = [2,3,8,5,1];
let sum = 0;

// forEach()로 누적합 구하기
// numbers.forEach(function(el) {
//     sum+=el;
// },0)
// console.log(sum);

// reduce()로 누적합 구하기
// let result = numbers.reduce(function(acc,val,idx,ary) { // 누적하는 reduce
//     console.log(acc,val,idx,ary);
//     return acc+val;
// }, 0);
// console.log(result);

let result = numbers.reduce(function(acc,val,idx,ary) { // 누적하는 reduce
    console.log(acc,val)
    acc.push(val + 2); //[4, 5, 10, 7, 3]
    return acc;
}, []);

// <ul><li>2</li><li>3</li><li>8</li><li>5</li><li>1</li></ul>
result = numbers.reduce((acc,val,idx)=> {

if (idx == 0) {
    acc = '<ul>';
}
acc += '<li>' + val + '</li>';

if (idx == numbers.length - 1)
    acc += '</ul>';

return acc; // 다음 순번의 누적 초기값으로 사용함.
}, '');

document.write(result);
console.log('최종결과: ',result);

//배열요소의 max 값.
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {

    if (max < numbers[i])
        max = numbers[i];

}
console.log('max: ',max)
console.log('==================')


//reduce()로 최대값 구하기
max = numbers[0];
let a = 0;

result = numbers.reduce((acc,val)=> {
// 두 개의 값을 비교해서 큰 값 반환. // 나의 풀이
if (val > a) {
    a = val;
    max = val;
} else if (val < a) {
    max = a;
}

},0)
console.log('max: ',max)

result = numbers.reduce((acc,val)=> {
    // 두 개의 값을 비교해서 큰 값 반환. // 풀이
    console.log(val);
    return acc > val ? acc : val;
    },Number.MIN_SAFE_INTEGER)
    console.log('max: ',max)

