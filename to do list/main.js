let text = document.getElementById('text'); //input
let btn = document.getElementById('add'); //button
let create = document.getElementById('create'); //div

const clickBtn = ()=> {
    let textValue = text.value; //value input
    if(textValue){
        // create text
        let outPut = document.createElement('div');
        create.appendChild(outPut);
        outPut.classList.add('outPut');
        let content = document.createElement('span');
        outPut.appendChild(content);
        content.innerHTML = textValue;
        create.appendChild(outPut);
        let divBtn = document.createElement('div');
        outPut.appendChild(divBtn);
        let hr = document.createElement('hr');
        create.appendChild(hr);
        // done 
        let btn = document.createElement('span');
        btn.innerHTML = `<i class="fa-solid fa-check"></i>`;
        divBtn.appendChild(btn);
        btn.addEventListener('click' , ()=>{
            if(btn){
                outPut.style.textDecoration = "line-through";
                outPut.style.color = 'gray';
                btn.style.color ='gray';
                delet.style.color= '#f00';
            }
        } );
        // delete
        let delet = document.createElement("span");
        delet.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        delet.style.color='#f00';
        delet.addEventListener('click',()=>{
            if(btn){
                outPut.remove();
                hr.remove();
            }
        })
        divBtn.appendChild(delet);
    }
}
// if(localStorage.length == 0){
//     localStorage.setItem('text', );
// }
// localStorage.clear()