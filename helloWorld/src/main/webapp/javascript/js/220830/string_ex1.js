
let items = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis velit ad ex dolore exercitationem, excepturi distinctio. Atque illum quod odio vero, omnis nisi iusto deleniti, itaque reiciendis illo neque nostrum?'

let bdy = document.querySelector('body'); // body 태그를 찾아서 bdy 변수에 값을 담아줌.
let div = document.createElement('div'); // div 태그를 새로 생성하겠다.
bdy.append(div); // body를 div으로 감싸기

let words = items.split(' ');
words.forEach(word => {
   let span = document.createElement('span'); // <sapn></span>
   span.innerText = word;

   div.append(span); // div를 span으로 감싸기
});

let inp = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = '찾기';

//btn.onclick = function() {
    // 버튼을 클릭하면...

inp.onchange = function() {
    // Enter를 누르면
    let findword = inp.value; // 입력한 값을 findword에 담음.
    let spans = document.querySelectorAll('span'); // span 태그 내용 전부
    // console.log(findword);
    // console.log(spans);
    spans.forEach(function(span){
        // <span>Lorem</span> <span>ipsum</span> ....
        if(findword ==span.innerText){
            span.remove();
        }
    });
    inp.value='';
    inp.focus();
}

document.querySelector('div').after(inp,btn); //after() div 뒤에 inp와 btn을 위치시킴.