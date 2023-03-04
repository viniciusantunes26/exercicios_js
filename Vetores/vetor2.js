var num = [3,6,1,7,9,4,2]
var aux

for(var i= 0; i < num.length; i++){
    for(var j= 0; j < num.length - 1; j++){
       
        if(num[j] > num[j+1]){
            aux = num[j]
            num[j] = num[j+1]
            num[j+1] = aux
        }
    }
    console.log(num)
}
