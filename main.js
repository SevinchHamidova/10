// vazifa 1
// let count = 0;
// const arr = ["ona", "Ali", "Hi"];
// for (const iterator of arr) {
//   count += iterator.length
// }
// console.log(count);


// vazifa 2
// let word = prompt("word ");
// for (words  of word) {
//     if (word.toLowerCase() === "hi" || word.toLowerCase() === "hello"){
//         console.log("assalomu aleykum");
//     }else{
//         console.log("szni gapizda hi yoki hello yoq");
//     }
// }


// vazifa 3
// let word = ["ali", "olma", "ozbekiston"];
// let uzun = "";
// for (engUzun of word) {
//     if (engUzun.length > uzun.length) {
//         uzun = engUzun;
//       }
// }
// console.log(uzun);


// Vazifa 4
// const arr = [ 1, 2, 3, 4, 66, 99];
// let boshidagiSon = arr[0];
// let oxirgiSon = arr[arr.length - 1];
// let natija = boshidagiSon+oxirgiSon;
// console.log(natija);


// vazifa 5
// const word = prompt("Enter word");
// const arrLetters = word.split("");
// let count = 0;
// for (const iterator of arrLetters) {
//   if(iterator == iterator.toUpperCase()) {
//     count++
//   }
// }
// console.log(count);
// HOMEWORK>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// vazifa 6
// const word = prompt("enter word");
// let uzunlik = word.length;
// let harf = word.charAt(uzunlik - 1);
// let harfSoni = 0;

// for ( harfi of word) {
//   if (harfi == harf) {
//       harfSoni++;
//   }
// }

// console.log(`kiritilgan ${word} so'zida ${harfSoni} ta o'xshash har bor`);

// vazifa 7 
// const arr = [7, 9, 43, 8];
// let yigindi = 0;
// for ( son of arr) {
//   yigindi += son;
// }
// let ortaArifmetik = yigindi / arr.length;
// console.log(`Arraydagi sonlar o'rta arifmetigi: ${ortaArifmetik}`);
// vazifa 8

// const arr =  ["olma", "nok", "shaftoli"];
// let arrOne = arr[0].split("");
// let onetMiddle = arrOne.slice(1, arrOne.length - 1)
// let one = arr[0].charAt(0).toUpperCase();
// let orta = arr[0].slice(1, arr[0].length - 1)
// let oxirgiHarf = arr[0].charAt(arr[0].length - 1).toUpperCase();

// console.log(one + orta + oxirgiHarf);