// array_indexof.js

// String.prototype.indexOf()
// Array.prototype.indexOf()


const members = ['진정욱', '노은경', '백나현']
const newMems = ['김민지', '노은경', '정다슬']

let pos = members.indexOf('노언경');
// members 배열에 newMems 추가
// 반복문 사용.

newMems.forEach(member => {
    // member의 값이 members의 배열에 존재하는 지 여부 확인 후 추가.
    if (members.indexOf(member) == -1) { // 값이 없을 경우
        members.push(member);
    }
    //else if (members.indexOf(member) == 1) {}
})

console.log(members); // ['진정욱','노은경','백나현','김민지','정다슬']

//some() 특정
let result = members.some(member => member == '노은경'); // 구문이 한 줄이면 return 생략해서 이렇게 가능

//every() 모든
result = members.every(member => member.length == 3);
//members.push('김민'); 하면 이름이 2글자인 학생이 생겨서 false 나옴.
console.log(result);

//find() 
result = members.find(member => member.startsWith('김')); // 구문이 한 줄이면 return 생략해서 이렇게 가능
console.log(result);