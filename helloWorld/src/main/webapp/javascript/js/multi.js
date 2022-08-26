// multi.js : 구구단 출력.

let str = '';
let br = '<br>';
// <p> 3*1 = 3 </p>
// 3*2 = 6
// 3*3 = 9


let num = 3;
for (let i = 1; i < 9; i++) {
    str += '<p>' + num + ' X ' + i + ' =' + num * i + '</p>'
    // str은 string 타입이므로 <p></p>를 적어줘야 document.write() 출력가능..
    // 1~9까지 출력해야 하므로 += 로 표현해서 문장을 누적시킨다.
}
document.write(str);
document.write(br);

let numb = 30;
console.log(`numb의 값은 ${numb} 입니다.`); // ``안에 편하게 문자도 넣고 ${변수} 도 넣고 할 수 있음.

let str2 = '';
//이 방식으로 위에 적었던 곱셈 표현을 더 간결하게 표현할 수 있음.
for (let i = 1; i < 9; i++) {
    //str += '<p>'+num+' X '+i+' ='+num*i+'</p>'
    str2 += `<p>${num} * ${i} = ${num*i}</p>`
}
document.write(str2);
document.write(br);

let str3 = '';

function gugudan(numb) {

    num = numb;
    for (let i = 1; i < 9; i++) {
        str3 += '<p>' + num + ' X ' + i + ' =' + num * i + '</p>'
        // str은 string 타입이므로 <p></p>를 적어줘야 document.write() 출력가능..
        // 1~9까지 출력해야 하므로 += 로 표현해서 문장을 누적시킨다.
    }
    return str3;
}
let result = gugudan(8);
document.write(result);