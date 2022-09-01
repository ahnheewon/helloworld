// string_charat.js

// CharAt(index) = >  문자 반환

console.log('World'.charAt(3));

function checkGender(no) {
    norp = no.replace(/-/gi,'');
    if (norp.charAt(6) == 1) {
        console.log("남자입니다.")
    } else if (norp.charAt(6) == 2) {
        console.log("여자입니다.")
    }
}

checkGender('970301-2345678');
checkGender('950301-1345678');
checkGender('9503011345678');

