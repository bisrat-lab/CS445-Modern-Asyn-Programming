// Array.prototype.removeDuplicates = function(){
//     let newArray = new Array();
//     this.sort();
//         for(let i=0; i<this.length;i++){
//                 if(this[i] == this[i +1]){
//                     continue;
//                 }
//                 newArray[newArray.length] = this[i]; 
//         }
//         return newArray;
//     };
    // console.log( [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicates())

    Array.prototype.removeDuplicates = function(){
        let newArray =[];
        
            for(let i=0; i<this.length;i++){
                let current = this[i];
                    if(newArray.indexOf(current) < 0) {
                       newArray.push(current)
                    }
                
            }
            return newArray;
        };
        console.log( [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicates())
   
