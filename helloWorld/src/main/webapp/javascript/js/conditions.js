// conditions.js

// 함수 표현 방식1
// function welcomeFnc(param) {
//     console.log('Welcome ' + param);
// }

// 함수 표현 방식2
let welcomeFnc = function (param) {
    console.log('Welcome ' + param);
} // 단 두 줄 이상인 경우 중괄호 사용.

// function helloFnc(param) {
//     console.log('Hello ' + param);
// }
//함수 표현 방식3 ES6 버전 부터 가능.
let helloFnc = (param) => console.log('Hello ' + param); // 단 두 줄 이상인 경우 중괄호 사용.

function callFunc(fnc) { //매개 값으로 함수가 올 수 있다!!!
    let name = 'Hong';
    fnc(name);
}

callFunc(welcomeFnc);
callFunc(helloFnc);

const members = [{ // 상수 변수 const, 새 값 할당 불가능 => 값을 바꿀 수 없다.
        id: 'user1',
        name: '홍길동',
        score: 80,
        phone: '010-1234-1234',
        gender: 'M'
    },
    {
        id: 'user2',
        name: '김민식',
        score: 85,
        phone: '010-1234-1111',
        gender: 'W'
    },
    {
        id: 'user3',
        name: '최우신',
        score: 55,
        phone: '010-1234-2222',
        gender: 'M'
    },
    {
        id: 'user4',
        name: '황의겸',
        score: 70,
        phone: '010-1234-4321',
        gender: 'W'
    }
];

//console.log(members);

const passMember = [];

for (let i = 0; i < members.length; i++) {
    if (members[i].score > 60) {
        console.log('이름: ' + members[i].name);
        passMember[passMember.length] = members[i].name;
    }
}
console.log(passMember);

const women = []
for (let member of members) {
    if (member.gender == 'W') {
        women[women.length] = member;
    }
}
console.log(women);

// 테이블 형식(표) =>
// 성별: 남자->파란색 글씨, 여자-> 빨간색 글씨

//makeTr(파란색,빨간색) // makeBlueTr(), makeRedTr()

//1번 방식 (파/빨 모두 가능)
function makeTr(mem,color) {
    let tr = `<tr style = 'color: ${color}'>`;
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;    
    }
    tr += '</tr>';
    return tr;
}

//2번 방식 (함수 하나 당 한 색만 가능)
function makeRedTr(mem) {
    let tr = `<tr style = 'color: red'>`;
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;    
    }
    tr += '</tr>';
    return tr;
}
function makeBlueTr(mem) {
    let tr = `<tr style = 'color: blue'>`;
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;    
    }
    tr += '</tr>';
    return tr;
}


//함수 이용해서 출력하기 1번 방식
let str1 = '<table border=1>';
str1 += '<tr><th>아이디</th><th>이름</th><th>점수</th><th>연락처</th><th>성별</th></tr>';
for(let member of members) {
    if (member.gender == 'W') {
        str1 += makeTr(member,'red');       
    } else if (member.gender == 'M') {  
        str1 += makeTr(member,'blue');  
    }
}

//함수 이용해서 출력하기 2번 방식
let str2 = '<table border=1>';
str2 += '<tr><th>아이디</th><th>이름</th><th>점수</th><th>연락처</th><th>성별</th></tr>';
for(let member of members) {
    if (member.gender == 'W') {
        str2 += makeRedTr(member);       
    } else if (member.gender == 'M') {
        str2 += makeBlueTr(member);  
    }
}
str2 += '</table>';
document.write(str1)
//document.write(str2);