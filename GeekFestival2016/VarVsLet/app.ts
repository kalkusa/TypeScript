for (var i = 0; i < 10; i++) {}
for (let j = 0; j < 10; j++) {}

console.log(i);
console.log(j);

//Uwaga: jeśli transpilujemy do ES<6 TSC rzuci błąd, ale skompiluje do var