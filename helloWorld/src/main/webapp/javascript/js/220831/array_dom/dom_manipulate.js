// dom_manipulate.js

// 

let frm = document.createElement('form'); // <form></form>
frm.setAttribute('action','addMember.jsp');
frm.setAttribute('method','post');

// 자식요소 (label)
let labelId = document.createElement('label');
labelId.setAttribute('for','user_Id');
labelId.innerText='사용자 아이디 ';
frm.appendChild(labelId); // 자식을 감싸는 appendChild

// 자식요소 (input)
let inputId = document.createElement('input');
inputId.setAttribute('type','text');
inputId.setAttribute('name','user_id');
inputId.setAttribute('id','user_id');
frm.appendChild(inputId);

// (label)
let labelPw = document.createElement('label');
labelPw.setAttribute('for','user_pw');
labelPw.innerText=' 사용자 비밀번호 ';
frm.appendChild(labelPw); // 자식을 감싸는 appendChild
// (input)
let inputPw = document.createElement('input');
inputPw.setAttribute('type','text');
inputPw.setAttribute('name','user_pass');
inputPw.setAttribute('id','user_pass');
frm.appendChild(inputPw);

let button = document.createElement('button');
button.innerText='로그인';
//button.style.float='right';
frm.appendChild(button);

// div#show의 자식요소로 지정.
document.getElementById('show').appendChild(frm); // frm을 감싸는 (id가 'show'인) 태그(div)

console.log(frm);