// Topics will be covered:
// -> Place a value in the nth postion of an Array 


let arr = [20, 34, 43, 2, 43 , 34, 1];
document.getElementById("solution").innerText = arr;

document.getElementById("btn").addEventListener('click',()=>{

    const index = parseInt(document.getElementById("input1").value);
    const value = parseInt(document.getElementById("input2").value);
    const length = arr.length;

    for (let i = length-1 ; i >= index ; i--) {
 
        let element = arr[i];
        arr[i+1] = element;

    }
     arr[index] = value;

     // arr.splice(index,0,value); (through using predefined method)

     document.getElementById("solution").innerText = arr;
})


