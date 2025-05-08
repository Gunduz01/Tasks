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
// console.log("Input ilə daxil edilən bir rəqəmin (0-9 arasında) tək rəqəm olub olmadığını yoxlayan alqoritm yazın.")
// let number = prompt("Zehmet olmasa 0-9 arasinda bir reqem daxil edin")

// if (0 < Number(number) && Number(number) < 9 && Number(number)%3==0){
//     console.log("Daxil etdiyiniz reqem hem 0 ve 9 arasindadir, hem de tek ededdir")
// }else{
//     console.log("Daxil etdiyiniz eded hec bir serti odemir");
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


