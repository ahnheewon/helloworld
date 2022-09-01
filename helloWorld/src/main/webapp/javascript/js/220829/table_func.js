// table_func.js

const members = [{ // 상수 변수 const, 새 값 할당 불가능 => 값을 바꿀 수 없다.
    id: 'user1', name: '홍길동', score: 80, phone: '010-1234-1234'}, 
    { id: 'user2', name: '김민식', score: 85, phone: '010-1234-1111'}, 
    { id: 'user3', name: '황의겸', score: 70, phone: '010-1234-4321'}];


let str = '<table border=1 style="text-align:center;">';
str += makeHd(); // tr 맨 윗 부분.
for (let member of members) {
    str += makeTr(member); // 만든 함수 사용!
}
str += '</table>';
document.write(str);

function makeTr(mem = {}) { // mem은 object 타입 변수
    let tr = '<tr>';
    // `<td> ID: ${member.id}</td><td>${member.name}</td><td>${member.score}</td>`;
    // 이렇게 말고 편하게 확장 for문 사용.
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;    
    }
    tr += '<td><button style="display:block">확인</button></td>';
    tr += '</tr>';
    return tr;
}

function makeHd() { // 표 맨 윗부분을 함수로 만듦.
    let titles = ['아이디', '이름', '점수', '연락처', '확인'];
    let tr = '<tr>';
    for (let title of titles) {

        tr += `<th>${title}</th>`;
    }
    tr += '</tr>';
    return tr;
}