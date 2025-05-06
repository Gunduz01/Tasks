// // task-1
// console.log("Ededlerin toplanmasina xosh geldiniz");
// let first = prompt ("Zehmet olmasa eded daxil edin");
// let second = prompt ("Zehmet olmasa eded daxil edin");
// let sum = Number(first) + Number(second);
// console.log("Ededlerin cemi " + sum);
// // task-2
// alert("Hello World");
// // task-3
// console.log("Ededlerin hasilinin tapilmasina xos geldiniz");
// let reqem1 = prompt ("Zehmet olmasa eded daxil edin")
// let reqem2 = prompt ("Zehmet olmasa eded daxil edin")
// let cem = Number(reqem1) * Number(reqem2)
// console.log("Ededlerin hasili " + cem)
// // task-4
// let thing = prompt("Bir sheyler yaz")
// alert(thing)
// task-5
console.log("Iki musbet ededin cemlenmesi");
var a = prompt("Zehmet olmasa eded daxil edin");
var b = prompt("Zehmet olmasa eded daxil edin");
var add = 0;
if (Number(a) > 0 && Number(b) > 0) {
    add = Number(a) + Number(b);
    console.log("Daxil etdiyiniz ededlerin cemi: " + add);
}
else {
    console.log("Ededler musbet deyil!");
}
// task-6
console.log("Ededin hansi tip oldugunu gormeye xos gelmisiz");
var c = prompt("Zehmet olmasa her hansisa bir eded daxil edin");
if (Number(c) > 0) {
    console.log("Eded musbetdir");
}
else if (Number(c) == 0) {
    console.log("Eded 0-a beraberdir");
}
else if (Number(c) < 0) {
    console.log("Eded menfidir");
}
// task-7
console.log("2 daxil edilen ən böyük ədədin tapılmasına xoş gəlmisiniz");
var j = prompt("Birinci ədədi daxil edin:");
var z = prompt("İkinci ədədi daxil edin:");
if (Number(j) > Number(z)) {
    console.log("Birinci daxil etdiyin ədəd ikincidən böyükdür.");
}
else {
    console.log("İkinci daxil etdiyin ədəd birincidən böyükdür.");
}
// task-8
console.log("Daxil etdiyiniz ededin 5-e tam bolunub, bolunmediyini tapaq");
var hi = prompt("Zehmet olmasa eded daxil edin");
if (Number(hi) % 5 == 0) {
    console.log("Eded 5-e tam bolunur");
}
else {
    console.log("Eded 5-e tam bolunmur");
}
// task-9
console.log("Daxil etdiyiniz ededin cut eded olub, olmadigini tapaq");
var hay = prompt("Zehmet olmasa eded daxil edin");
if (Number(hay) % 2 == 0) {
    console.log("Eded cutdur");
}
else {
    console.log("Eded tekdir");
}
