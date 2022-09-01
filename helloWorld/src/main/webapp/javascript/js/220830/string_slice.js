// string_slice.js

let str = 'Good, Morning!';

// index 는 0부터 셉니다.

console.log(str.slice(2,7)); // index: 2(포함) ~ index: 7(미포함)
console.log(str.slice(2)); // index: 2 ~ END.
console.log(str.slice(2, -2)); // index: 2 ~ 거꾸로 두번째
console.log(str.slice(-2)); // index: 거꾸로 두번째 부터

console.log(str.substring(0,7));

// substr(3, 5); index: 3부터 5문자.

// 문자열을 찾아서 인덱스를 반환.
console.log(str.indexOf('Mor'));
console.log('Good Morning, Good Afternoon'.lastIndexOf('Good')); // 자주 쓰임.

str='Good Morning, Good Afternoon, Good Evening';
let position = str.indexOf('Good',str.indexOf('Good')+1); // => 0
console.log(position);

// 문자열에서 반복되는 구문의 횟수를 찾기.
let cnt = 0;
let pos =str.indexOf('Good');

// 찾는 문자열이 없을 경우 -1 을 반환, 있으면 0 을 반환.
while(pos != -1) {
    cnt++;
    pos = str.indexOf('Good',pos+1);
}

console.log(cnt+' 회');

const members = [
    {name:"황병걸",age:25},
    {name:"김효인",age:22},
    {name:"이상욱",age:18},
    {name:"최근석",age:29},
]


let searchKey = prompt('찾을 이름을 입력.'); // members 배열에서 searchKey를 찾아서 나이를 콘솔에 출력.


members.forEach(function(member){
    // <span>Lorem</span> <span>ipsum</span> ....
    if(member.name.indexOf(searchKey) != -1){ // includes() => true/false로 반환.
        console.log(searchKey+"은 "+ member.age+ "살 입니다.");
    }
});