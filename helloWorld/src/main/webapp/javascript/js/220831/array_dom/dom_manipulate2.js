// dom_manipulate2.js

const members = [
    {mid:'admin', mname: '관리자', mphone: '010-1111-2222'},
    {mid:'hong12', mname: '홍길동', mphone: '010-123-4567'},
    {mid:'parkgr', mname: '박규림', mphone: '010-5436-4321'},
]

document.addEventListener('DOMContentLoaded', function () {
    
    showMember();

    // 등록버튼 이벤트.
    let addBtn = document.querySelector('button');
    addBtn.addEventListener('click',addMember);

    //회원찾기 이벤트.
    let findBtn = document.getElementById('findMember');
    findBtn.addEventListener('click',findMember);

    // 회원 전체 선택/해제 이벤트

    let allChk = document.getElementById('chk1');
    allChk.addEventListener('click',allChecked);
   

}); // dom 요소에 이벤트 등록.

function allChecked() {
 // checked : ture;

    let chks1  = document.querySelectorAll('tbody input[type="checkbox"]');

    chks1.forEach(chk => { //내가 true이면 전부 true
        chk.checked =this.checked; }) // true or false의 값

}

function showMember() {
    // 리스트 보여주기.
    let table =  document.getElementById('list');
    members.forEach( member =>{
       let mValues=[];
       // object -> array.
        // for(let prop in member) {
        //     mValues.push(member[prop]);
        // }
        mValues=Object.values(member); // Object.keys(member): [속성,속성]
       let tr= makeTr(mValues);
       table.appendChild(tr);
    });
}

function addMember() {

    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');
    let mcheck = document.createElement('mcheck');
    
    console.log(mid.value,mname.value,mphone.value);

// 입력값이 없으면 warning!!!

if(!mid.value || !mname.value || !mphone.value ){
    alert('필수 값을 입력하세요!!!');
    return; // 함수에서 return 구문은 break; 함수종료.
            // 아래 구문으로 넘어가지 않는다.
}
    const mValues =[mid.value,mname.value,mphone.value]

    makeTr(mValues);
    document.getElementById('list').appendChild(makeTr(mValues));

    //다 입력했으면 초기화
    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();
    };

function findMember() {
    // 찾을 아이디.
    let id = document.getElementById('mid').value;

    let trs = document.getElementsByTagName('tbody')[0].children;
    // getElementsByTagName() 메소드는 인덱스값을 나타내므로 [n] 숫자 적어준다
    trs = document.querySelectorAll('tbody > tr')
    //querySelectorAll('조건') 메소드는 조건을 만족하는 쿼리를 전부 가져온다.
    console.log(trs); // NodeList [tr,tr,tr]

    trs.forEach(tr =>{
    //    tr.className= ''; // 속성이름 변경. 
    tr.removeAttribute('class');
    })

    trs.forEach(tr => {

        if(tr.firstElementChild.textContent == id) {
            tr.setAttribute('class','focus');
            //값 변경.
            let childTd=tr.children;
            childTd[1].textContent=document.getElementById('mname').value;
            childTd[2].textContent=document.getElementById('mphone').value;

        }
    });

}

    function makeTr(mValues=[]/* mValues=[mid,mname,mphone] 배열타입 */) {
       
        let tr = document.createElement('tr');

          
     
        tr.addEventListener('click', function(){ //tr요소에 click 이벤트 등록
            //alert(this.firstElementChild.innerText); // this는 tr을 의미. firstElementChild
            
            //클릭하면 인풋태그에 그 정보가 뜨도록 하기
            // let inputId = document.getElementById('mid');
            // let inputName = document.getElementById('mname');
            // let inputPhone = document.getElementById('mphone');
            // inputId.setAttribute('value',this.firstChild.innerText);
            // inputName.setAttribute('value',this.firstChild.nextSibling.innerText);
            // inputPhone.setAttribute('value',this.firstChild.nextSibling.nextSibling.innerText);
        
            //교수님 풀이 더욱 간결..
            document.getElementById('mid').value=this.firstChild.innerText;
            document.getElementById('mname').value=this.firstChild.nextSibling.innerText;
            document.getElementById('mphone').value=this.firstChild.nextSibling.nextSibling.innerText;

        })  // true: 이벤트가 상위부터 전파됨. default값이 false

        // 복사,붙여넣기 말고 배열-forEach문 사용해서 넣기 .
        mValues.forEach(val => {
            let td = document.createElement('td'); // id 위치 <td>user1</td>
            let txt = document.createTextNode(val);   
            
            td.appendChild(txt); // <td>user1</td>
            tr.appendChild(td); // <tr><td>user1</td></tr>
        });



        // 삭제버튼 추가.
        let td1 = document.createElement('td');
        let btn = document.createElement('button'); //<button></button>
        btn.style.width='100%';
        let txt=  document.createTextNode('삭제');

       

        //삭제 버튼 누르면 삭제되도록.
        btn.addEventListener('click', function (e) {
            this.parentElement.parentElement.remove(); // this는 btn을 의미.
            //btn의 부모 td의 부모 tr을 삭제한다
            e.stopPropagation();  // 이벤트 전파 차단
        },false); // true: 이벤트가 상위부터 전파됨. 

        btn.appendChild(txt);
        td1.appendChild(btn); // 버튼을 td로 감싸고
        tr.appendChild(td1); // td를 tr로 감싸고
    
        //체크박스 추가
        let td2 = document.createElement('td');
        let inp = document.createElement('input'); 


        inp.addEventListener('change',function(){
            let checkProp = document.querySelectorAll('tbody tr input[type="checkbox"]');
    
            // let checkAry = [];
            // checkProp.forEach(item=> {checkAry.push(item);})
    
            // [inp,inp,inp] 배열 
            // 배열형태에 쓸 수 있는 every(), some() 메소드
            document.getElementById('chk1').checked=[...checkProp].every(item=>item.checked)
        });
    


        inp.addEventListener('click',function(e){
            // tr의 이벤트가 발생하지 않도록 하기 위해서.
            e.stopPropagation();
        },false) /////안됨
  
        inp.setAttribute('type','checkbox');
        inp.setAttribute('id','chk2');



        td2.appendChild(inp);
        tr.appendChild(td2);

        return tr;
    }


