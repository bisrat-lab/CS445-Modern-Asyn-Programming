const { Observable, from, of, fromEvent, Subject } = rxjs;
const { map, filter } = rxjs.operators;

async function removeDuplicates(arr) {
   return [...new Set(arr)];
    }
Array.prototype.removeDuplicatesAsync = async function () {
  let arr = this;
  let result = await removeDuplicates(arr);
  console.log(result);
}
  
  [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
  
// Array.prototype.removeDuplicatesPromise = function () {
  //   let promises = new Promise((resolve, reject) => {
  //     let result = [...new Set(this)];
  //     resolve(result);
  //   });
  //   // promises.then(e => console.log(e))
  //   from(promises).subscribe((e) => console.log(e));
  // };