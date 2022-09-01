// object_clone.js

let originObj = {
    sname : 'Park',
    age: 10,
    changeAge: function() {
        this.age++;
    }
}

let cloneObj = originObj; // originObj 참조 값이 cloneObj

cloneObj.sname='Choi';
console.log(originObj.sname);
originObj.changeAge();
console.log(cloneObj.age);

// 복사.
let obj2 = new Object();
let copyObj = Object.assign({},originObj);

copyObj.sname='Hong';
console.log(originObj.sname);

// 중복 속성도 해보고, 없는 속성도 적용
let newObj = {
    sname: 'Kim',
    phone: '010-1234',
    age:10
}

//assign()메소드는 복사할 때 쓰면 된다.
let dupObj=Object.assign(newObj,originObj);
console.log(dupObj);

// 객체의 속성을 지정.
let s1= {
    sname: 'Hong'
}
//속성 추가방식
s1.age =10; // delete s1.age;
s1['phone']= '010-1111';
s1.friends = [{name:'김영식',phone:'010-1234',age:20},{name:'홍명식',phone:'010-2345', hobbies:['수영','낚시']}
];

console.log(s1);
console.log(s1.friends[0].name); // 0번 김영식
console.log(s1.friends[0].age); // 1번 홍명식

class Student {
    constructor(sname,age) {
        this.sname=sname;
        this.age=age;
    }
}

let s2 = new Student('홍길동',20);
Object.defineProperty(s2,'score', //속성의 이름
{ 
    set: function (score) { //setter랑 비슷..  
            if (score > 100) {
                throw '잘못된 값을 입력했습니다. (100보다 적은 값 입력하세요.)';
            } else if (score < 0) {
                throw '잘못된 값을 입력했습니다. (0보다 큰 값 입력하세요.)';
            } else {
                this._score = score;
            }
    //  ※ 주의 ※
    //    this.score=score; 라고 하면
    //    계속 자기자신을 호출하게 돼서 에러 발생! *
    },
    get: function () {
        return this._score;
    }
});

s2.score=20;

console.log('점수는'+s2.score);
let s3 = new Student('김민규',22); // s3은 score 속성이 없다.

Student.prototype.showInfo = function() {
    return `이름은 ${this.sname} 나이는 ${this.age} 입니다.`;
}
console.log(s2.showInfo());
console.log(s3.showInfo());
