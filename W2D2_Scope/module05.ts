Array.prototype.removeDuplicates = function() {
   let result : any = [];
        for(let i=0; i< this.length;i++){
            if(!result.includes(this[i])){
                result.push(this[i]);
            }
        }
        return result;
  };

  Array.prototype.removeDuplicates2 = function(){
    let result2 = [];
    let res = new Set;
         for(let i=0; i< this.length;i++){
             res.add(this[i]);
         }
        return result2;
   };