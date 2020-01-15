// indentasi berantakan :D
var hasil = function kuadrat(n,q){
    if(q==1){
    return n;
} //disini kalo mau dikasih else, atau {} nya dihilangkan sekalian
{
    return n * kuadrat(n,q-1)
}}

console.log(hasil(5,3))
