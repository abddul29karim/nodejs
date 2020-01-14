function fibo(n){
    if(n>0){
        return  n * fibo(n-1) 
    }
    return 1
}

console.log(fibo(4))
