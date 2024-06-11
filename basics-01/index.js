/*   ==========   the task is to traverse the array & rendered its each index value  ====== */

const div = document.getElementById('root');

const arr = [4 ,5 , 6, 4, 6, 3, 2, 9];

let text = '';

for (let i = 0; i < arr.length; i++) {

   text += `<span>value at index <strong>${i}</strong> : ${arr[i]}</span><br>`;

// doing the same task with more complex approach (using 'createElement' and 'appendChild' method)
//    let element = document.createElement('span');
//    element.innerHTML = `value at index ${i} : ${arr[i]}`
//    div.appendChild(element);

//    Append a <br> element after each <span> element
//    let lineBreak = document.createElement('br');
//    div.appendChild(lineBreak);
 
}

div.innerHTML = text;

/* ================   ***  ====================  */

/* ===  the next task is to create a input element & render the value of arrays index using that value when clicking on the button through an eventlistener ========  */
  
const button = document.getElementById('btn');

   button.addEventListener('click', ()=> {

    let inputVal = parseInt(document.getElementById('input').value);

       if(inputVal < arr.length  && typeof(inputVal)==='number' && inputVal >= 0){
          let value = arr[inputVal];
          document.querySelector('.display').innerText = value;
       }
       else{
        document.querySelector('.display').innerText = "invalid index";
       }
   })
   

/* ================   ***  ====================  */