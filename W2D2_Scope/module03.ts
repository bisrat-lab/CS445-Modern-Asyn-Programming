function isDula(arr: number[]){
    let result = true;
    if(arr.length > 0){
        if(arr.length%2 == 0){
          for (let i=2; i<arr.length; i=i+2){
              if(arr[0] + arr[1]!== arr[i] + arr[i+1]){
                    result = false;
                    break;
              }
          }  
        }else{
            result = true;
        }
    }
    return result;
}