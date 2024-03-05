let n1 = 10;
let n2 = 10.5;
let s1 = "Hello, everyone";
console.log(n1, n2, s1)

let arr = [["hello, engse", "hiii"], 1, 2, "👍",]
console.log(arr)
console.log(arr[0][5])

for(let c in arr) console.log("for in : ", c)
for(let c of arr) console.log("for of : ", c)
for(let c of arr[0]) console.log("for of c[0]: ", c)

let obj = {'🍕' : 2, '🌭' : 3, '🍔' : 8,}
console.log("object : ", obj)

for(let c in obj) console.log("for of c, obj[c] : ",c, obj[c])
for(let c of Object.entries(obj)) {
    console.log("Onject.entries(name) : ", c)
    console.log("entries[0], entries[1]",c[0],", " ,c[1])
}
for(let [key, value] of Object.entries(obj)) {
    console.log("key, value",key,", " ,value)
}

const arr2 = arr.map((v, i) => {
    console.log(v, i)
    return v
})
arr[0][1] = "hello kim"
console.log(arr)
console.log(arr2)

let value1 = [10, 20, 30, 40 ,50, 1, 1, 1, 1, 1, 1, 1]
const value2 = value1.map((v) => {
    return v
})
value1[1] = 99
console.log(Object.is(value1, value2))
console.log(value1)
console.log(value2)