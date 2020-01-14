var hasil = function kuadrat(n,q){
    if(q==1){
    return n;
}
{
    return n * kuadrat(n,q-1)
}}

console.log(hasil(5,3))