var respon=require('./angka.js');

var a = 20;
var b = 5;

var hasilAdd = respon.calculate.add(a,b);
console.log(hasilAdd);
console.log('-------');

var hasilsub = respon.calculate.substract(a,b)
console.log(hasilsub);
console.log('-------');

var hasilmultiply = respon.calculate.multiply(a,b)
console.log(hasilmultiply);
console.log('-------');

var hasildivide = respon.calculate.divi(a,b)
console.log(hasildivide);
console.log('-------');



