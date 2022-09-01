// reduce_map.js

// Array.prototype.map(); => 매핑 (A -> A')
// Array.prototype.filter(); => 필터링(A -> a)

const names = ['이현성', '이주훈', '황용주', '최승현'];

let mapfnc = (name, idx) => {
    let obj = {}
    obj.name = name;
    obj.sno = idx + 1; // 순번 (1,2,3, ...로 보이도록 +1)
    
    return obj;
};

let filfnc = (member) => {
    return member.name.startsWith('이')
    // startsWith('asd'): 'asd'로 시작하는지? 알 수 있는 boolean 타입 메소드
};

/*-------------------------------------------------------------------------*/

let redueceMapFnc = (acc, val, idx) => { // map()

    let obj = {}
    obj.name = val;
    obj.sno = idx + 1;
    acc.push(obj); // [ ]안에 {}형태로 차곡 차곡 쌓임.

    return acc;
}

let reduceFilFnc = (acc, val) => { // filter()
    if (val.name.startsWith('이')) {
        acc.push(val); // 추가
    }
    return acc;
}

/*-------------------------------------------------------------------------*/

// map.filter 메소드 체인 - 위에서 함수로 만들어 넣으니까 매우 간결.
let result = names.map(mapfnc).filter(filfnc);
//  filter (): return 값이 true 이면 반환, false 이면 반환안함.
console.log(result);

/*-------------------------------------------------------------------------*/

// reduce로 map ,filter와 같은 기능 구현.
members = names.reduce(redueceMapFnc, []).reduce(reduceFilFnc, []);
console.log(members);