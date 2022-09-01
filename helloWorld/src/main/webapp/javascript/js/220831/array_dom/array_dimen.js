// array_dimen.js

const members = [ // 배열안의 배열
    ['홍길동', 20],
    ['김익수', 25],
    ['손봉호', 23]
]

members.push(['도소람',25]);
members[0][1]=22; // 인덱스 기반
console.table(members);
 
const objMembers =[ // 배열안의 obj
]

// 배열을 obj로 변경!
members.forEach(member => {
    console.log(`이름: ${member[0]}, 나이: ${member[1]}`);
    let obj = {
        name: member[0],
        age: member[1]
    }
    objMembers.push(obj);
})

console.log(objMembers);

const aryMembers = [];


// obj를 다시 배열로 변경!
objMembers.forEach(member =>{
let ary = [member.name,member.age];
aryMembers.push(ary);

})

console.log(aryMembers);
