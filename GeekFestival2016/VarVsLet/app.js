for (var i = 0; i < 10; i++) { }
for (var j = 0; j < 10; j++) { }
console.log(i);
console.log(j);
//Uwaga: jeśli transpilujemy do ES<6 TSC rzuci błąd, ale skompiluje do var
for (var i = 0; i < 5; i++) {
    for (var i = 0; i < 5; i++) {
        console.log("Iteration no:" + (i + 1));
    }
}
for (var i_1 = 0; i_1 < 5; i_1++) {
    for (var i_2 = 0; i_2 < 5; i_2++) {
        console.log("Iteration no:" + (i_2 + 1));
    }
}
var x = 10;
//Tu może być osiem tysięcy linni kodu
var x = 20;
console.log(x);
//let x = 30; //Użycie let jednak wykryje ponowną deklarację 
//# sourceMappingURL=app.js.map