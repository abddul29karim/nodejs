
var methods ={};
methods. add = (a, b)=>{
    hasiladd = a+b;
   return hasiladd;
   }
methods. substract=(a,b)=>{
    // hasilsubs = a-b;
    return hasilsubs =a-b;
}
methods.multiply=function multiply(a,b){
    // hasilmult = a*b;
    return hasilmult = a*b;
}
methods.divi=function divide(a,b){
    hasildiv = a/b;
    return hasildiv;
}

// var hasiladd = add(a, b);
// var hasilsubs = substract(a,b);
// var hasilmult = multiply(a,b);
// var hasildiv = divide(a,b);

// console.log("hasil add" + hasiladd);
// console.log("hasil subs" + hasilsubs);
// console.log("hasil multiply " + hasilmult);
// console.log("hasil divide " +hasildiv)
exports.calculate=methods