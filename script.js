const addbutton = document.querySelector('.addbutton');
const container = document.querySelector('.container');
var input = document.querySelector('.input');

class item{
    constructor(itemname){
        this.creatediv(itemname);
    }
    creatediv(itemname){
        let input = document.createElement('input');
        input.value = itemname;
        input.disabled = true;
        input.classList.add('iteminput');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editbutton = document.createElement('button');
        editbutton.innerHTML = "EDIT";
        editbutton.classList.add('editbutton');

        let rembutton = document.createElement('button');
        rembutton.innerHTML = "REMOVE";
        rembutton.classList.add('rembutton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editbutton);
        itemBox.appendChild(rembutton);

        editbutton.addEventListener('click',() => this.edit(input));
        rembutton.addEventListener('click', ()=> this.remove(itemBox));
    }
    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item){
        container.removeChild(item);
    }
}
function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    } 
}
addbutton.addEventListener('click', check);