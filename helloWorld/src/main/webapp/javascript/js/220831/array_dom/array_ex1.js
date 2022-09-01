// array_ex1.js
const data =`
[{
  "id": 1,
  "first_name": "Leonardo",
  "last_name": "Danielczyk",
  "email": "ldanielczyk0@de.vu",
  "gender": "Male",
  "salary": 9773
}, {
  "id": 2,
  "first_name": "Barclay",
  "last_name": "Philot",
  "email": "bphilot1@nytimes.com",
  "gender": "Male",
  "salary": 7243
}, {
  "id": 3,
  "first_name": "Georgie",
  "last_name": "Longmore",
  "email": "glongmore2@printfriendly.com",
  "gender": "Male",
  "salary": 6067
}, {
  "id": 4,
  "first_name": "Lynelle",
  "last_name": "Baggally",
  "email": "lbaggally3@netvibes.com",
  "gender": "Female",
  "salary": 7041
}, {
  "id": 5,
  "first_name": "Briggs",
  "last_name": "Mayoral",
  "email": "bmayoral4@pagesperso-orange.fr",
  "gender": "Male",
  "salary": 8702
}, {
  "id": 6,
  "first_name": "Fredi",
  "last_name": "Mangenet",
  "email": "fmangenet5@mail.ru",
  "gender": "Female",
  "salary": 5131
}, {
  "id": 7,
  "first_name": "Gar",
  "last_name": "Arnell",
  "email": "garnell6@virginia.edu",
  "gender": "Non-binary",
  "salary": 9955
}, {
  "id": 8,
  "first_name": "Bethina",
  "last_name": "Crichley",
  "email": "bcrichley7@ucoz.ru",
  "gender": "Female",
  "salary": 3082
}, {
  "id": 9,
  "first_name": "George",
  "last_name": "Meller",
  "email": "gmeller8@who.int",
  "gender": "Female",
  "salary": 5309
}, {
  "id": 10,
  "first_name": "Jeromy",
  "last_name": "Dozdill",
  "email": "jdozdill9@acquirethisname.com",
  "gender": "Male",
  "salary": 3050
}, {
  "id": 11,
  "first_name": "Heinrick",
  "last_name": "Morffew",
  "email": "hmorffewa@tumblr.com",
  "gender": "Male",
  "salary": 8026
}, {
  "id": 12,
  "first_name": "Bradan",
  "last_name": "Meeks",
  "email": "bmeeksb@guardian.co.uk",
  "gender": "Male",
  "salary": 3982
}, {
  "id": 13,
  "first_name": "Bianka",
  "last_name": "Staff",
  "email": "bstaffc@blogtalkradio.com",
  "gender": "Female",
  "salary": 4585
}, {
  "id": 14,
  "first_name": "Alf",
  "last_name": "Posse",
  "email": "apossed@quantcast.com",
  "gender": "Male",
  "salary": 6961
}, {
  "id": 15,
  "first_name": "Rice",
  "last_name": "Whatling",
  "email": "rwhatlinge@youtube.com",
  "gender": "Male",
  "salary": 9159
}]`;

let result = JSON.parse(data) // string -> object

result.forEach(element => {
    console.log(element);
})

console.log(result[0]);

// 성별이 Female 이고, salary 값이 5000 이상인 사람.
//map() filter() reduce()
/*let str= result.reduce((acc,val,idx)=>{
    if(idx==0) {
        acc= '<ul>';
    }
    if(val.gender==)
})

let entries = result.map(member => {
    let ary =[]
    ary.push(Object.values(member));
    return ary;
});
console.log(entries);*/