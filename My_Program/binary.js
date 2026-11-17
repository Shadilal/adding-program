list = [5,10,20 ,36 ,42,53,68,76,89,100]
let middle;
let num = 89;
let left = 0;
right    = list.length - 1

while(left <= right){
       let  middle = Math.floor((left + right) / 2)
        if(list[middle] == num){
            console.log("the element is found at ", middle)
            break;
        }else if(list[middle] > num ){
                right = middle - 1 
        }else{
            left = middle + 1 
        }
     
}
if(left > middle){
    console.log("the element not found ")
}