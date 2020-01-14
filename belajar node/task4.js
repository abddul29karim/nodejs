var array = ["john", "JACOB", "jinGleHeimer", "schmidt"]
var newarr  = array.map(function (name){ //untuk menampung
  var str=name.substring(0,1).toUpperCase()+name.substring(1).toLowerCase()
  return str
})
console.log(newarr)

