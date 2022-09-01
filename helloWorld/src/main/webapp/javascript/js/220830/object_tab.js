// object_tab.js
// function Table 선언.

function Table(param) {
    this.members = param;

    this.addMember = function (member) {
        //push() 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
       this.members.push(member); 
    }

    this.showList = function () {
        let str = '<table border=1>';
        this.members.forEach(member => {
            str += '<tr>';
            for (let prop in member) {
                str += `<td>${member[prop]}</td>`;
            }
            str += '</tr>';
        })
        str += '</tr>';
        return str;
        }
    }
let members = [{id:'user1', name:'홍길동', age:20}]

let t1 = new Table(members);
t1.addMember({id:'user2', name:'최규식', age:27});
t1.hobby='낚시';

let str = t1.showList();
document.write(str);
