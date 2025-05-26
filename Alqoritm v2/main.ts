// Task-1
// console.log("Input ilə daxil edilən bir ədədin 10-dan böyük və 20-dən kiçik olub olmadığını yoxlayan alqoritm yazın.")
// let number = prompt("Zehmet olmasa eded daxil edin")
// if (10< Number(number) && Number(number)<20){
//     console.log("Input ile verilen eded 10 ve 20 araligindadir.")
// } else{
//     console.log("Input ile verilen eded 10 ve 20 araliginda deyil.")
// }

// // Task-2
// console.log("Input ilə daxil edilən iki ədədin bir-birinə bərabər olub olmadığını yoxlayan alqoritm yazın.")
// let number1 = prompt("Zehmet olmasa eded daxil edin")
// let number2 = prompt("Zehmet olmasa eded daxil edin")
// if (Number(number1)==Number(number2)){
//     console.log("Input ile daxil edilen ededler bir-birine beraberdir.")
// }else{
//     console.log("Input ile daxil edilen iki eded bir-birine beraber deyil.")
// }

// // Task-3
// console.log("Input ilə daxil edilən bir string dəyərin #Salam# sözünə bərabər olub olmadığını yoxlayan alqoritm yazın.")
// let salam = prompt("Zehmet olmasa #Salam# qeyd edin")
// if (String(salam)=="Salam"){
//     console.log("Emeliyyat muvefeqiyyetle basa catmishdir")
// } else{
//     console.log("GAME OVER!")
// }

// // Task-4
// console.log("Input ilə daxil edilən bir ədədin mənfi olub olmadığını yoxlayan və mənfidirsə, onun müsbət qarşılığını (modulunu) ekrana çıxaran alqoritm yazın.")
// let number = prompt("Zehmet olmasa bir eded daxil edin")
// let eksnumber
// if (Number(number)>0){
//     console.log("Edediniz musbetdir, bu sebebden bir emeliyyat heyata kecire bilmirik")
// } else{
//     console.log("TEBRIK EDIRIK! Edediniz menfidir, indi ise ededinizin musbet halini teqdim edirik.")
//     eksnumber=Number(number) - (Number(number)*2)
//     console.log("Daxil etdiyiniz ededin musbet hali: " + eksnumber)
// }

// // Task-5
// console.log("Input ilə daxil edilən üç fərqli ədəddən ən kiçiyini tapan alqoritm yazın.")
// let number1 = prompt("Zehmet olmasa bir eded daxil edin")
// let number2 = prompt("Zehmet olmasa bir eded daxil edin")
// let number3 = prompt("Zehmet olmasa bir eded daxil edin")
// let min = number1
// if(Number(number2)<Number(min)){
//     min=number2
// }else if(Number(number3)<Number(min)){
//     min=number3
// }
// console.log("En kicik eded: "+min)

// // Task-6
// console.log("Input ilə daxil edilən bir ədədin 7-yə bölündükdə qalığının 0 olub olmadığını yoxlayan alqoritm yazın.")
// let number = prompt("Zehmet olmasa bir eded daxil edin")
// if (Number(number)%7==0){
//     console.log("Daxil etdiyiniz eded 7-e tam bolunur, qaliq 0-dir")
// } else{
//     console.log("Daxil etdiyiniz eded 7-e tam bolunmur")
// }

// // Task-7
// console.log("Input ilə daxil edilən bir string dəyərin uzunluğunun 5-dən böyük olub olmadığını yoxlayan alqoritm yazın.")
// let text = prompt("Zehmet olmasa soz ve yaxud soz birlesmesi qeyd edin")
// if (String(text).length>5){
//     console.log("Daxil etdiyiniz soz ve ya soz birlesmesinin simvollari 5-den coxdur. Simvollarin sayi: "+String(text).length)
// }else if(String(text).length>=5){
//     console.log("Daxil etdiyiniz soz ve ya soz birlesmesinin simvollari 5-den azdir veya 5-e beraberdir. Simvollarin sayi: "+String(text).length) 
// }

// // Task-8
// console.log("Input ilə daxil edilən iki boolean dəyərin hər ikisinin də true olub olmadığını yoxlayan alqoritm yazın.")

// let x = prompt("Zehmet olmasa bir deyer (true or false) daxil edin")
// let y = prompt("Zehmet olmasa bir deyer (true or false) daxil edin")

// let bool1 = String(x).toLowerCase() === "true";
// let bool2 = String(y).toLowerCase() === "true";

// if (bool1&&bool2){
//     console.log("Hər iki dəyər true-dur.");
// } else{
//     console.log("Hər iki dəyər false-dir.");
// }

// // Task-9
// console.log("Input ilə daxil edilən temperaturun (Selsi ilə) 0 dərəcədən aşağı olub olmadığını yoxlayan alqoritm yazın (donma nöqtəsi).")

// let temp = parseFloat(prompt("Zehmet olmasa hava temperaturunu daxil edin"))
// if (temp<0){
//     console.log("Havanin temperaturu donma derecesinden asagidir. Temperatur: "+temp)
// }else{
//     console.log("Havanin temperaturu donma derecesinden yuxaridir. Temperatur: "+temp)
// }

// // Task-10
// console.log("Input ilə daxil edilən bir rəqəmin (0-9 arasında) tək rəqəm olub olmadığını yoxlayan alqoritm yazın.");

// let number = prompt("Zəhmət olmasa 0-9 arasında bir rəqəm daxil edin");

// number = Number(number);

// if (number >= 0 && number <= 9 && number % 2 != 0) {
//     console.log("Daxil etdiyiniz rəqəm 0-9 arasındadır və təkdir.");
// } else {
//     console.log("Daxil etdiyiniz rəqəm ya 0-9 arasında deyil, ya da tək deyil.");
// }

// // Task-11
// console.log("Input ilə daxil edilən bir string dəyərin boş olub olmadığını yoxlayan alqoritm yazın.")

// let text = prompt("Zehmet olmasa ya text yazin ve ya bos qoyun.")
// let empty = ""
 
// if(String(text)==empty){
//     console.log("Daxil etdiyiniz deyer boshdur");
// } else{
//     console.log("Daxil etdiyiniz deyer: " + text);
// }

// // Task-12
// console.log("Input ilə daxil edilən bir ədədin kvadratının 100-dən böyük olub olmadığını yoxlayan alqoritm yazın.");
// let number = prompt("Zehmet olmasa bir eded daxil edin")
// let result = Number(number) ** 2

// if(Number(result) > 100){
//     console.log("Daxil etdiyiniz ededin kvadrati, 100-den boyukdur. Netice: "+result);
// }else{
//     console.log("Daxil etdiyiniz ededin kvadrati, 100-den kicikdir. Netice: "+result);
// }

// // Task-13
// console.log("Input ilə daxil edilən iki ədədin hasilinin müsbət, mənfi yoxsa sıfır olduğunu tapan alqoritm yazın.");
// let x = prompt("Zehmet olmasa bir eded daxil edin")
// let y = prompt("Zehmet olmasa bir eded daxil edin")
// let result
// result=Number(x) * Number(y)

// if (Number(result)>0){
//     console.log("Daxil etdiyiniz ededlerin hasili musbetdir. Cavab: "+result);
// }else if (Number(result)<0){
//     console.log("Daxil etdiyiniz ededlerin hasili menfidir. Cavab: "+result);
// }else if (Number(result)==0){
//     console.log("Daxil etdiyiniz ededlerin hasili 0-dir. Cavab: "+result);
// }

// Task-14
// console.log("Input ilə daxil edilən bir string dəyəri integer tipinə çevirməyə çalışan və uğurlu olub olmadığını bildirən alqoritm yazın. Nümunə: 123 çevrilə bilər, abc yox.");
// ***

// // Task-15
// console.log("Input ilə daxil edilən bir ilin uzun il (leap year) olub olmadığını yoxlayan alqoritm yazın (4-ə bölünürsə və 100-ə bölünmürsə, və ya 400-ə bölünürsə).");
// let year = prompt("Zehmet olmasa her hansi bir il daxil edin")
// if (Number(year)%4==0 && Number(year)%100!=0 || Number(year)%400==0){
//     console.log("Daxil etdiyiniz il en uzun il olmusdur")
// }else{
//     console.log("Daxil etdiyiniz il en uzun il olmamisdir")
// }

// // Task-16
// console.log("Input ilə daxil edilən istifadəçi yaşının 18-dən böyük və ya bərabər olub olmadığını yoxlayan alqoritm yazın.")
// let age = prompt("Zehmet olmasa yasinizi daxil edin")
// if(Number(age) >= 18){
//     console.log("Yasiniz 18-den yuxaridir, hesab aca bilersiniz");
// }else{
//     console.log("Yasiniz 18-den kicikdir, teessuf ki hesab aca bilmersiniz. Amma, yasinizi yuksek yazaraq bizi aldada bilersiniz. Deymez).");
// }

// // Task-17
// console.log("Input ilə daxil edilən üçbucaq tərəflərinin (a, b, c) üçbucaq bərabərsizliyini (a+b>c, a+c>b, b+c>a) ödəyib ödəmədiyini yoxlayan alqoritm yazın.");
// let a = prompt +("Ucbucaqin qiymetlerini teyin edin")
// let b = prompt +("Ucbucaqin qiymetlerini teyin edin")
// let c = prompt +("Ucbucaqin qiymetlerini teyin edin")
// if(a+b>c && a+c>b && b+c>a){
//     console.log("ucbucaqin terefleri bir birine proporsionaldir.");
// }else{
//     console.log("ucbucaqin terefleri bir birine proporsional deyil.");
// }

// // Task-18
// console.log("Input ilə daxil edilən bir ədədin həm 3-ə, həm də 5-ə tam bölünüb bölünmədiyini yoxlayan alqoritm yazın.");
// let number = prompt +("Zehmet olmasa bir eded daxil edin")
// if(Number(number)%3==0 && Number(number)%5==0){
//     console.log("Daxil etdiyiniz eded hem 3-e, hem de 5-e bolunur");
// }else{
//     console.log("Daxil etdiyiniz eded ne 3-e, ne de 5-e bolunur")
// }

// // Task-19
// console.log("Input ilə daxil edilən bir float ədədi ən yaxın tam ədədə yuvarlaqlaşdıran (conversion) və nəticəni çıxaran alqoritm yazın.");
// let deyer = prompt ("Deyer daxil edin")
// let eded = parseFloat(deyer)
// let yuvarlanmisEded = Math.round(eded)
// console.log(yuvarlanmisEded)

// // Task-20
// console.log("Input ilə daxil edilən bir balın (0-100 arası) A (90-100), B (80-89), C (70-79), D (60-69), F (<60) kateqoriyalarından hansına aid olduğunu müəyyən edən alqoritm yazın. (Yalnız bir şərt bloku istifadə edin).");
// let average = prompt ("Zehmet olmasa ortalama balinizi qeyd edin, 0 ve 100 arasinda olmalidir")
// if (91<=Number(average)&&Number(average)<=100){
//     console.log("Sizin qiymetiniz A-ile qiymetlendirilir. Baliniz: "+average);
// }else if(81<=Number(average)&&Number(average)<=90){ 
//     console.log("Sizin qiymetiniz B-ile qiymetlendirilir. Baliniz: "+average);
// }else if(71<=Number(average)&&Number(average)<=80){ 
//     console.log("Sizin qiymetiniz C-ile qiymetlendirilir. Baliniz: "+average);
// }else if(61<=Number(average)&&Number(average)<=70){ 
//     console.log("Sizin qiymetiniz D-ile qiymetlendirilir. Baliniz: "+average);
// }else if(51<=Number(average)&&Number(average)<=60){ 
//     console.log("Sizin qiymetiniz E-ile qiymetlendirilir. Baliniz: "+average);
// }else if(50>=Number(average)){ 
//     console.log("Sizin baliniz yeteri qeder deyil. Barcelona ile birlikde gelen sezon deneyin(((. Baliniz: "+average);
// }


// Taskshome-3

// // Task-21
// console.log("Fibonacci")

//     let a = 0
//     let b = 1
//     let step = prompt ("enter step")

//     for(let i=0; i < Number(step) ; i++){
//         b=a+b
//         a=b-a
//         console.log(b)
//     }

// // Task-22
// console.log("$$$ Input ile daxil olunan 2 ededin cemi.");
// let number = prompt("Please enter a number")
// let number1 = prompt("Please enter a number")
// let sum
// sum = Number(number) + Number(number1)
// console.log(Number(sum))

// // Task-23
// console.log("$$$ Input ilə daxil olunan müsbət ədədərin cəmi.");

// let number = prompt("Please enter only positive number");
// let number1 = prompt("Please enter only positive number");

// while (Number(number) <= 0 || Number(number1) <= 0) {
//     alert("Yalnız müsbət ədəd daxil etməlisiniz!");
//     number = (prompt("Please enter only positive number"));
//     number1 = (prompt("Please enter only positive number"));
// }

// console.log("Cəm:", number + number1);

// // Task-24
// console.log("Input ile daxil olunan ədədin sıfır,müsbət yoxsa mənfi olduğunu tapın.");

// let number = prompt("Please enter number")

// if(Number(number)>0){
//     console.log("Daxil etdiyiniz eded musbetdir");
// }else if(Number(number)<0){
//     console.log("Daxil etdiyiniz eded menfidir");
// }else if(Number(number)==0){
//     console.log("Daxil etdiyiniz eded 0-dir");d
// }

// // Task-25
// console.log("Input ile daxil olunan 2 eded arasinda olan en boyuk ededi tapin ");
// let number = prompt("Zehmet olmasa bir eded daxil edin")
// let number1 = prompt("Zehmet olmasa bir eded daxil edin")

// if (Number(number)>Number(number1)){
//     console.log("Birinci daxil etdiyiniz eded, ikinci daxil etdiyiniz ededden boyukdur");
//     console.log("Birinci daxil edilen eded: "+number);
//     console.log("Ikinci daxil edilen eded: "+number1);
// }else{
//     console.log("Ikinci daxil etdiyiniz eded, Birinci daxil etdiyiniz ededden boyukdur");
//     console.log("Ikinci daxil edilen eded: "+number1);
//     console.log("Birinci daxil edilen eded: "+number);
// }

// // Task-26
// console.log("$$$ Input ile daxil olunan ədədin 5-e tam bolunub bolunmediyini tapın.");
// let number = prompt("Zehmet olmasa bir eded daxil edin")
// if(Number(number) % 5 == 0){
//     console.log("Daxil etdiyiniz eded 5-e tam bolunur");
// }else{
//     console.log("Daxil etdiyiniz eded 5-e tam bolunmur")
// }

// // Task-27
// console.log("$$$ Input ile daxil olunan ədədin cüt yoxsa tək olduğunu tapın.");
// let number = prompt("Zehmet olmasa bir eded daxil edin")
// if (Number(number) % 2 == 0){
//     console.log("Daxil etdiyiniz eded cutdur.");
// }else{
//     console.log("Daxil etdiyiniz eded tekdir.");
// }

// // Task-28
// console.log("Daxil olunan ədədin özündən rəqəmlərinin cəmini çıxırıq");

// let number = prompt("Zəhmət olmasa ədəd daxil edin");
// let eded = Number(number);  // sadəcə bir dəfə çevirmək kifayətdir
// let cem = 0;

// while (eded > 0) {
//     let reqem = eded % 10;
//     cem += reqem;           // rəqəmlərin cəmini topla
//     eded = Math.floor(eded / 10);  // tam hissəni saxla
// }

// let ferq = Number(number) - cem;

// console.log("Rəqəmlərin cəmi:", cem);
// console.log("Fərq (ədəd - rəqəmlərin cəmi):", ferq);

// // Task-29
// console.log("Diskriminantin tapilmasi");
// let root1 , root2
// let a = prompt("Please enter number")
// let b = prompt("Please enter number")
// let c = prompt("Please enter number")
// ****// let discriminant = b*b-4*a*c

// // Task-30 Array
// console.log("İstifadəçidən alınan n sayda ədədi array’i toplayın ve siralayin");

// let n = +prompt("Neçə ədəd daxil edəcəksiniz?");
// let ededler: number[] = [];

// for (let i = 0; i < n; i++) {
//   let eded = +prompt(`${i + 1}. ədəd:`);
//   ededler.push(eded);
// }

// let cem = ededler.reduce((a, b) => a + b, 0);
// let siralanmis = [...ededler].sort((a, b) => a - b);

// alert(`Cəm: ${cem}\nSıralanmış: ${siralanmis.join(", ")}`);

// // Task-31
// console.log("Verilən 5 elementlik arrayi for ilə ekrana çap et.");

// let cedvel = ["Salam","Necesen","Yaxshi ol","sene isim dusub qaqa","kartima 10 ata bilersen"]

// console.log(cedvel);

// // Task-32
// console.log("Arrayin uzunluğunu heç bir metod istifadə etmədən tap.");

// let cedvel = [1,2,3,4,5,6,7,8,9]
// let basket = 0

// for(let i=0 ; i < 100 ; ++i){
//   if(cedvel[i] !== undefined){
//       basket++
//   }
//   if(cedvel[i] === undefined){
//     break
//   }
// }
// console.log(basket);
  
// // Task-33
// console.log("Verilən arrayin bütün elementlərini tək-tək toplayaraq ümumi cəmini tap.");

// let basket = [1,4,15,60]
// let sum = 0


// for(let i=0;i<basket.length;i++){
//     sum = sum + basket[i];
// }
// console.log(sum);

// // Task-34
// console.log("Arraydəki bütün elementləri 1 vahid artır (yalnız döngü ilə).");
// let basket = [1,5,15]
// for(let i=0;i<basket.length;++i){ 
//     basket[i]=basket[i]+1
// }
// console.log(basket);

// // Task-35
// console.log("Verilən arraydə yalnız cüt ədədləri ekrana yazdır.");
// let basket = [1,2,4,8,5,3,11,12]
// for(let i=0;i<basket.length;i++){
//     if(basket[i]%2==0){
//         console.log(basket[i]);
//     }else{
//         undefined
//     }
// }

// // Task-36
// console.log(" Verilən arrayin tərsini yeni bir arrayə köçür.");
// let basket = []
// let cedvel = [1,2,3,4,5]
// for (let i=cedvel.length-1;i>=0;i--){
//     basket[cedvel.length-1-i] = cedvel[i]
// }
// console.log(basket);

// // Task-37
// console.log("Stringin tersini tap");

// let word = "Gunduz"

// word.split("").reverse().join("")

// // Task-38
// console.log("Yalnız split() və slice() istifadə edərək son 3 hərfi sil və stringə çevir.");

// let str = "programlama"

// str.slice(0,-3)

// // Task-39

// console.log("Bu iki stringi massivə çevirib concat() və join() ilə Frontend stringi düzəlt.");

// let a = "Front"
// let b = "End"
// let all = a.concat("",b)
// console.log(all);

// // Task-40
// console.log("Return the longest word in a sentence.");

// let sentence = "Return the longest word in a sentence";
// let words = sentence.split(" ");
// let longest = "";

// for (let i=0; i<words.length;i++){
//     if(words[i].length>longest.length){
//         longest=words[i]
//     }else{
//         continue
//     }
// } 

// console.log(longest);

// // Task-41
// console.log("Factorial of a number.");

// let number = 6
// let result = 1

// for (let i=1; i <= number; i++){
//     result=result*i
// }
// console.log(result);

// // Task-42
// console.log("Convert a string to snake case.");
// let str = "ThisIsATest String";
// let snake = str.replace(/([a-z])([A-Z])/g, '$1_$2').replace(/\s+|-/g, '_').toLowerCase();

// console.log(snake); // this_is_a_test_string

// // Task-43
// console.log("Return an array’s unique values.");
// let arr = [1,3,3,4,5,6,7,8,8,9]
// let nonarr = [... new Set(arr)]
// console.log(nonarr);

// // Task-44
// console.log("Find the sum of all even numbers up to a given number.");

// let number = prompt("Please enter a number")
// let limit = 0
// for (let i=0;i<=Number(number);i+=2){
//     limit=limit+i
//     console.log(limit);
// }

// // Task-45
// console.log("Check if all items in an array are identical.");

// let arr = [5, 5, 5, 5];
// let allSame = arr.every(item => item === arr[0]);

// console.log(allSame);

// // Task-46
// console.log("Return the middle character(s) of a string.");

// let num = "The king OF FooTbAlll, MEEEEEEEEEEEESSSIIIIIII"
// let mun = num.toLowerCase()

// console.log(mun);

// // Task-47
// console.log("Find the greatest common divisor of two numbers.");

// function gcd(a, b) {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }

// let a = prompt("Reqem daxil et");
// let b = prompt("Reqem daxil et");

// let num = gcd(Number(a), Number(b));
// alert("EBOB: " + num);

// // Task-48
// console.log("Remove falsey values from an array.");

// let arr = [1,2,undefined,NaN," ", 8, 0]
// let removed = arr.filter(Boolean);
// console.log(removed);

// // Task-49
// console.log("Find the shortest word in a string.");

// let num = "Hey, what are you doing? Are you OK"
// let words = num.split(" ");
// let shortest = words.reduce((short,word) => word.length < short.length ? word: short);

// console.log(shortest);

// // Task-50
// console.log("Generate an array with a given range and step.");

// let num2 = 10;
// let num1 = 0;
// let basket = [];

// for (let i = num1; i <= num2; i++) {
//     basket.push(i);
//     console.log(basket);   
// }

// // Task-51

// const pupil = {
//     name: "Gunduz",
//     surname : "Imanli",
//     age : 24,
//     school : "3 number of school",
// }

// pupil.grade = "5+"

// console.log("Shagirdin adi: "+pupil.name, "Shagirdin mektebi: "+pupil.school);

// // Task-52

// const school = {
//     students : [
//         {ad:"Gunduz", soyad:"Imanli", age:24, grades:"5+"}
//         {ad:"Gunduz", soyad:"Imanli", age:24, grades:"5+"}
//         {ad:"Gunduz", soyad:"Imanli", age:24, grades:"5+"}
//     ]
// }

// // Task-53

// const pupil = {
//     name: "Gunduz",
//     surname : "Imanli",
//     age : 24,
//     school : "3 number of school",
// }

// delete pupil.age;

// // Task-54

// const pupil = {
// }

// pupil.age = 15;

// // Task-55

// let car = {
//   brand: "Toyota",
//   color: "red",
//   year: 2020
// };

// car.year = 2025;

// // Task-56

// let arr = [1,2,3,4,5,6,7,8,9]
// let uzunluq = arr.length
// console.log(uzunluq);

// // Task-57
// let arr = [1,2,3,4,5,6,7,8]
// arr.push(9)
// console.log(arr);

// // Task-58

// let arr = [1,2,3,4,5,6,7,8,9]
// arr.shift()
// console.log(arr);

// // Task-59
// let arr = [1,2,3,4,5,6,7,8,9]
// arr.reverse()
// console.log(arr);

// // Task-60
// let arr = [1,2,3,4,5,6,7,8,9]
// for(let i = arr[0];i<=arr.length;i++){
//     console.log(i);
// }

// // Task-61
// let arr = [1,2,3,4,5,6,7,8,9]
// let cutler = arr.filter(ar => ar % 2 === 0)
// console.log(cutler);

// // Task-62
// let array = [1,"birazdan",2,"necesen",3,4,5,"gelersen",6,7,8,9,"salam"]
// let secilmisler = array.filter(reqemler => typeof reqemler !== "string");
// if (secilmisler.includes(array[0])){
// console.log(secilmisler);
// }

// // Task-63
// let arr = [1,2,3,4,5,6,7,8,9]
// let array = [10,11,12,13,14,15,16,17,18,19]

// let comb = arr.concat(array)

// // Task-64

// let arr = [1,2,3,4,5,6,7,8,9]

// let copy = Array.from(arr)

// console.log(copy);


// // Task-65

// let array = [1,2,3,4,5,6,7,8,9]
// array.pop()
// console.log(array);

// // Task-66

// let arr = [1,2,3,4,5,6,7,8,9]
// let vuruqlar = []
// for (let i = 0;i<arr.length;i++){
//      vuruqlar.push(arr[i] * 2)
// }
// console.log(vuruqlar);

// // Task-67

// let arr = [-1,2,-2,3,-5,8,9,-10,15]

// let menfiler = []
// let musbetler = []

// for(let i = 0;i<arr.length;i++){
//     if (arr[i]<0){
//         menfiler.push(arr[i])
//     }else{
//         musbetler.push(arr[i])
//     }
// }

// console.log("Musbetler: "+musbetler);
// console.log("Menfiler: "+menfiler);

// // Task-68

// let arr = ["salam","necesiz","yaxsi","pis","gel","al"]

// let uzunlar = arr.filter (array => array.length>=5)

// console.log(uzunlar);

// // Task-69

// let arr = [1,2,3,4,5,6,7,8,9,0]

// let min = arr[0]

// for(let i = 0;i<=arr.length;i++){
//     if(min>arr[i]){
//         min=arr[i]
//     }
// }

// console.log(min);

// // Task-70
// let arr = [1,2,3,4,5,6,7,8,9,10]

// let cem = arr.reduce((toplam,umumi)=> toplam+umumi,0)

// console.log(cem);

// // Task-71

// let arr = [1,2,3,4,5,6,7,8,9,10]

// arr.forEach(eded=> console.log(eded));

// // Task-71
// let arr = ["a","b","c","d","e","a","b","c","d","e"]

// let obj = {}

// let arr2 = []

// for(let i = 0;i<arr.length;i++){
//     let item = arr[i]
//     if (obj[item]){
//         obj[item]++;
//     }else{
//         obj[item] = 1
//         arr2.push(item)
//     }
// }

// console.log(obj);

// // Task-72

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// let cutler =[]
// let tekler =[]

// for(let i = 1; i<=arr.length;i++){
//     if(arr[i]%2===0){
//         cutler.push(i)
//     }else{
//         tekler.push(i)
//     }
// }

// console.log(cutler);
// console.log(tekler);

// // Task-73

// function twoSum(nums: number[], target: number): number[] {
//     const map = new Map<number, number>(); // Sayı -> İndis

//     for (let i = 0; i < nums.length; i++) {
//         const fark = target - nums[i]; // Hedefe ulaşmak için gereken diğer sayı

//         if (map.has(fark)) {
//             // Eğer fark daha önce eklenmişse, çözüm bulundu
//             return [map.get(fark)!, i];
//         }

//         // Şu anki sayıyı map'e ekle (değer = indis)
//         map.set(nums[i], i);
//     }

//     return []; // Çözüm bulunamazsa (problem tanımına göre aslında her zaman bulunmalı)
// }





















































  
  







