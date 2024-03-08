// // let n1 = 10;
// // let n2 = 10.5;
// // let s1 = "Hello, everyone";
// // console.log(n1, n2, s1)

// // let arr = [["hello, engse", "hiii"], 1, 2, "👍",]
// // console.log(arr)
// // console.log(arr[0][5])

// // for(let c in arr) console.log("for in : ", c)
// // for(let c of arr) console.log("for of : ", c)
// // for(let c of arr[0]) console.log("for of c[0]: ", c)

// let obj = {'🍕' : 2, '🌭' : 3, '🍔' : 8,}
// console.log("object : ", obj)
// let arr33 = Object.keys(obj).map(k => k + ", " +obj[k]);
// console.log("arr33 = ", arr33)


// // for(let c in obj) console.log("for of c, obj[c] : ",c, obj[c])
// // for(let c of Object.entries(obj)) {
// //     console.log("Onject.entries(name) : ", c)
// //     console.log("entries[0], entries[1]",c[0],", " ,c[1])
// // }
// // for(let [key, value] of Object.entries(obj)) {
// //     console.log("key, value",key,", " ,value)
// // }



// // const arr2 = arr.map((v, i) => {
// //     console.log(v, i)
// //     return v
// // })
// // arr[0][1] = "hello kim"
// // console.log(arr)
// // console.log(arr2)

// // let value1 = [10, 20, 30, 40 ,50, 1, 1, 1, 1, 1, 1, 1]
// // const value2 = value1.map((v) => {
// //     return v
// // })
// // value1[1] = 99
// // console.log(Object.is(value1, value2))
// // console.log(value1)
// // console.log(value2)

// let arr = ['11', 22 ,"33", 44, "a", 66];
// let arr1 = [0, 0, 0, 0, 0 , 0, ];
// let arr2 = arr.map((v, i) => v + "❤️❤️" + i);
// let arr3 = [];
// let arr4 = arr.map((v, i) => {

// });
// console.log("arr1 = ", arr1);
// console.log("arr2 = ", arr2);
// console.log("arr3 = ", arr3);
// for (let item in arr) {
//     arr1[item] = arr[item];
// }
// for (let item of arr) {
//     arr3.push(item);
// }
// console.log("arr1 = ", arr1);
// console.log("arr3 = ", arr3);

// //filter
// //map(), filter()은 배열에만 사용가능
// //하지만 Object(dict)에서는 사용하지 못함
// let arr21 = [];
// for (let item of arr) {
//     if(isNaN(item)) arr21.push(item);
// }
// console.log("arr21 = ", arr21)
// arr22 = arr.filter(v => {
//     console.log(v, typeof(v));

//     return !isNaN(v);
// });
// console.log("arr22 = ", arr22);

let arr = [1, 2, 3, 4]
let arr2 = [...arr]
console.log(arr, arr2)

let lottos = []
while (lottos.length < 7) {
    let lotto_number = Math.floor(Math.random()*45+1)
    if(lotto_number in lottos) continue;
    lottos.push(lotto_number);
}
lottos.slice(0, -2);
console.log(lottos.slice(0, -1))
console.log(lottos)